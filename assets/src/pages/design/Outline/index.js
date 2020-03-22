import React, { useState } from 'react';
import $t from 'prop-types';
import IconButton from '@/components/IconButton';
import * as types from '../types';
import DownIcon from './img/down.svg';
import RightIcon from './img/right.svg';
import style from './style.less';


const Outline = ({ widget }) => {
  return (
    <div className={style.outline}>
      <List nodes={widget.nodes} />
    </div>
  );
};


Outline.propTypes = {
  widget: $t.shape({
    nodes: $t.arrayOf(types.Node)
  })
};


export default Outline;


const List = ({ nodes }) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <ul className="list">
      {
        nodes.map(node => (
          <li key={node.id} className={`item type-${node.type}`}>
            <div className="header">
              <IconButton
                icon={collapsed ? <RightIcon /> : <DownIcon />}
                onClick={() => setCollapsed(!collapsed)} />
              {getNodeTitle(node)}
            </div>
            { hasChildren(node) &&
              <List nodes={node.children} />
            }
          </li>
        ))
      }
    </ul>
  );
};


List.propTypes = {
  nodes: $t.array.isRequired
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
