import React from 'react';
import $t from 'prop-types';
import cx from 'classnames';
import { createUseStyles } from 'react-jss';
import createDebug from 'debug';
import { isEmpty } from '@/utils/lang';
import * as $type from '../type';
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
  widget: $t.shape({
    nodes: $t.arrayOf($type.Node).isRequired
  }).isRequired
};

export default Simulator;


function processWidget({ nodes }) {
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
  process(nodes);

  debug('styles %o', styles);

  return { nodes, useStyles: createUseStyles(styles) };
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
