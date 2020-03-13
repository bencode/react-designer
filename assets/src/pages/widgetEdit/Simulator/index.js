import React, { useEffect } from 'react';
import $t from 'prop-types';
import cx from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { createUseStyles } from 'react-jss';
import createDebug from 'debug';
import style from './style.less';


const debug = createDebug('pageviver:Simulator');


const Simulator = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'page/mount' });
  }, []);

  const { widget } = useSelector(state => state.page);

  return (
    <div className={cx(style.simulator, 'viver-iphonex')}>
      <div className={cx(style.container)}>
        { widget && <Widget widget={widget} /> }
      </div>
    </div>
  );
};

Simulator.propTypes = {

};

export default Simulator;


const Widget = ({ widget }) => {
  const { elements, useStyles } = processWidget(widget);
  const styles = useStyles();
  return createElements(elements, styles);
};

Widget.propTypes = {
  widget: $t.shape({
    elements: $t.array
  }).isRequired
};


function processWidget({ elements }) {
  const styles = {};

  const process = children => {
    if (!Array.isArray(children)) {
      return;
    }
    children.forEach(element => {
      if (!isElement(element)) {
        return;
      }
      if (!isEmpty(element.styles)) {
        styles[getClassName(element)] = { ...element.styles };
      }
      process(element.children);
    });
  };
  process(elements);

  debug('styles %o', styles);

  return { elements, useStyles: createUseStyles(styles) };
}


function createElements(elements, styles) {
  if (!Array.isArray(elements)) {
    return elements;
  }

  return elements.map(element => {
    if (!isElement(element)) {
      return element;
    }

    const props = {
      key: element.id,
      className: styles[getClassName(element)]
    };

    const children = createElements(element.children, styles);
    return React.createElement(element.type, props, children);
  });
}


function getClassName(element) {
  return element.name || `${element.type}-${element.id}`;
}

function isElement(obj) {
  return obj && typeof obj.type === 'string';
}

function isEmpty(obj) {
  return !obj || Object.keys(obj).length === 0;
}
