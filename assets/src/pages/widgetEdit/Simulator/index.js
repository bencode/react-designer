import React, { useEffect } from 'react';
import cx from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import style from './style.less';

const Simulator = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: 'page/mount' });
  }, []);

  const { widget } = useSelector(state => state.page);

  return (
    <div className={cx(style.simulator, 'viver-iphonex')}>
      <div className={cx(style.container)}>
        {widget ?
          createElements(widget.elements) :
          <Loading />
        }
      </div>
    </div>
  );
};

Simulator.propTypes = {

};

export default Simulator;


const Loading = () => (
  <div>loading...</div>
);


function createElements(elements) {
  if (!Array.isArray(elements)) {
    return elements;
  }
  return elements.map(element => {
    return isElement(element) ?
      React.createElement(
        element.type, { key: element.id },
        createElements(element.children)
      ) :
      element;
  });
}


function isElement(obj) {
  return obj && typeof obj.type === 'string';
}
