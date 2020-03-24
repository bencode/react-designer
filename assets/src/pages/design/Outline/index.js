import React, { useState } from 'react';
import cx from 'classnames';
import $t from 'prop-types';
import IconButton from '@/components/IconButton';
import * as types from '../types';
import DownIcon from './img/down.svg';
import RightIcon from './img/right.svg';
import style from './style.less';


const Outline = ({ dispatch, widget }) => {
  return (
    <div className={style.outline}>
      <Node dispatch={dispatch} indent={0} node={widget} />
    </div>
  );
};


Outline.propTypes = {
  dispatch: $t.func.isRequired,
  widget: types.Node.isRequired
};


export default Outline;


const Node = ({ dispatch, indent, node }) => {
  const [collapsed, setCollapsed] = useState(false);
  const has = hasChildren(node) && !isTextElement(node);
  const handleHover = id => () => {
    dispatch({ type: 'page/hover', target: 'simulator', id });
  };
  return (
    <div className={`${style.node} type-${node.type} indent-${indent}`}>
      <div className="header" onMouseEnter={handleHover(node.id)} onMouseLeave={handleHover(null)}>
        <div className="spacer"></div>
        <div className="icon">
          {has &&
            <IconButton
              icon={collapsed ? <RightIcon /> : <DownIcon />}
              onClick={() => setCollapsed(!collapsed)} />
          }
        </div>
        <div className="title">
          {getNodeTitle(node)}
        </div>
      </div>
      { has &&
        <ul className={cx('children', { collapsed })}>
        {
          node.children.map(child => (
            <li key={child.id}><Node dispatch={dispatch} indent={indent + 1} node={child} /></li>
          ))
        }
        </ul>
      }
    </div>
  );
};

Node.propTypes = {
  dispatch: $t.func.isRequired,
  indent: $t.number.isRequired,
  node: types.Node.isRequired
};


function getNodeTitle(node) {
  if (node.type === 'text') {
    return node.body;
  }
  if (isTextElement(node)) {
    return `<${node.tag}> ${node.children[0].body}`;
  }
  if (node.type === 'element') {
    return `<${node.tag}>`;
  }
  throw new Error('assert false');
}

function hasChildren(node) {
  return node.type === 'element' && node.children && node.children.length > 0;
}

function isTextElement(node) {
  return hasChildren(node) && node.children.length === 1 && node.children[0].type === 'text';
}
