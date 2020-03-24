import React, { useState } from 'react';
import cx from 'classnames';
import $t from 'prop-types';
import IconButton from '@/components/IconButton';
import * as types from '../types';
import DownIcon from './img/down.svg';
import RightIcon from './img/right.svg';
import style from './style.less';


const Outline = ({ widget }) => {
  return (
    <div className={style.outline}>
      <Node indent={0} node={widget} />
    </div>
  );
};


Outline.propTypes = {
  widget: types.Node.isRequired
};


export default Outline;


const Node = ({ indent, node }) => {
  const [collapsed, setCollapsed] = useState(false);
  const has = hasChildren(node) && !isTextElement(node);
  return (
    <div className={`node type-${node.type} indent-${indent}`}>
      <div className="header">
        {has &&
          <IconButton
            className="collapse-btn"
            icon={collapsed ? <RightIcon /> : <DownIcon />}
            onClick={() => setCollapsed(!collapsed)} />
        }
        {getNodeTitle(node)}
      </div>
      { has &&
        <ul className={cx('children', { collapsed })}>
        {
          node.children.map(child => (
            <li key={child.id}><Node indent={indent + 1} node={child} /></li>
          ))
        }
        </ul>
      }
    </div>
  );
};

Node.propTypes = {
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
