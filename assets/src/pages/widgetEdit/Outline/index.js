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
          <li key={node.id}>
            <div className="title">{getNodeTitle(node)}</div>
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

