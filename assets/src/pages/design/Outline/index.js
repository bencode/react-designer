import React, { useState } from 'react';
import IconButton from '@/components/IconButton';
import * as types from '../types';
import DownIcon from './img/down.svg';
import RightIcon from './img/right.svg';
import style from './style.less';


const Outline = ({ widget }) => {
  return (
    <div className={style.outline}>
      <Node node={widget} />
    </div>
  );
};


Outline.propTypes = {
  widget: types.Node.isRequired
};


export default Outline;


const Node = ({ node }) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className="node">
      <div className="header">
        <IconButton
          icon={collapsed ? <RightIcon /> : <DownIcon />}
          onClick={() => setCollapsed(!collapsed)} />
        {getNodeTitle(node)}
      </div>
      { hasChildren(node) &&
        <ul className="children">
        {
          node.children.map(child => (
            <li key={child.id}><Node node={child} /></li>
          ))
        }
        </ul>
      }
    </div>
  );
};

Node.propTypes = {
  node: types.Node.isRequired
};


function getNodeTitle(node) {
  if (node.type === 'element') {
    return `${node.tag}_${node.id}`;
  }
  if (node.type === 'text') {
    return node.body;
  }
  throw new Error('assert false');
}


function hasChildren(node) {
  return node.type === 'element' && node.children && node.children.length > 0;
}
