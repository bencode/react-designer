import React from 'react';
import $t from 'prop-types';
import * as $type from '../type';
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
    nodes: $t.arrayOf($type.Node)
  })
};


export default Outline;


const List = ({ nodes }) => {
  return (
    <ul>
      {
        nodes.map(node => (
          <li key={node.id} className={`type-${node.type}`}>
            <div className="title">{getNodeTitle(node)}</div>
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
