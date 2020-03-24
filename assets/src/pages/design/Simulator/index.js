import * as React from 'react';
import cx from 'classnames';
import { createUseStyles } from 'react-jss';
import createDebug from 'debug';
import { isEmpty } from '@/utils/lang';
import * as types from '../types';
import style from './style.less';


const debug = createDebug('pageviver:Simulator');

const Simulator = ({ widget }) => {
  const { nodes, useStyles } = processWidget(widget);
  const styles = useStyles();

  return (
    <div className={cx(style.simulator, 'viver-iphonex')}>
      <div className={cx(style.container)}>
        {createNodes(nodes, styles)}
      </div>
    </div>
  );
};

Simulator.propTypes = {
  widget: types.Node.isRequired
};

export default Simulator;


function processWidget(widget) {
  const styles = {};

  const process = children => {
    if (!Array.isArray(children)) {
      return;
    }
    children.forEach(node => {
      if (node.type !== 'element') {
        return;
      }
      if (!isEmpty(node.styles)) {
        styles[getClassName(node)] = { ...node.styles };
      }
      process(node.children);
    });
  };

  process(widget.children);

  debug('styles %o', styles);

  return { nodes: [widget], useStyles: createUseStyles(styles) };
}


function createNodes(nodes, styles) {
  nodes = Array.isArray(nodes) ? nodes : [nodes];

  return nodes.map(node => {
    if (node.type === 'text') {
      return node.body;
    }

    if (node.type === 'element') {
      return createElementNode(node, styles);
    }

    throw new Error(`invalid node type ${node.type}`);
  });
}


function createElementNode(node, styles) {
  const props = {
    key: node.id,
    className: styles[getClassName(node)]
  };
  const children = createNodes(node.children, styles);
  return React.createElement(node.tag, props, children);
}

function getClassName(element) {
  return element.name || `${element.tag}-${element.id}`;
}
