import React from 'react';
import $t from 'prop-types';
import cx from 'classnames';
import { createUseStyles } from 'react-jss';
import createDebug from 'debug';
import { isEmpty } from '@/utils/lang';
import * as types from '../types';
import style from './style.less';


const debug = createDebug('pageviver:Simulator');

const Simulator = ({ widget, edit }) => {
  const { nodes, useStyles } = processWidget(widget);
  const styles = useStyles();

  return (
    <div className={cx(style.simulator, 'viver-iphonex')}>
      <div className={cx(style.container)}>
        {createNodes(nodes, { styles, edit })}
      </div>
    </div>
  );
};

Simulator.propTypes = {
  widget: types.Node.isRequired,
  edit: $t.shape({
    hover: $t.number
  })
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


function createNodes(nodes, opts) {
  nodes = Array.isArray(nodes) ? nodes : [nodes];

  return nodes.map(node => {
    if (node.type === 'text') {
      return createTextNode(node, opts);
    }

    if (node.type === 'element') {
      return createElementNode(node, opts);
    }

    throw new Error(`invalid node type ${node.type}`);
  });
}


function createTextNode(node, opts) {
  const props = createProps(node, opts);
  return (
    <span {...props}>{node.body}</span>
  );
}


function createElementNode(node, opts) {
  const props = createProps(node, opts);
  const children = createNodes(node.children, opts);
  return React.createElement(node.tag, props, children);
}

function createProps(node, opts) {
  return {
    key: node.id,
    className: createClassNames(node, opts)
  };
}

function createClassNames(node, { styles, edit }) {
  const nodeClassName = node.type === 'element' ? styles[getClassName(node)] : null;
  const hoverClassName = edit.simulatorHover === node.id ? 'vx-hover' : null;
  return cx(nodeClassName, hoverClassName);
}

function getClassName(element) {
  return element.name || `${element.tag}-${element.id}`;
}
