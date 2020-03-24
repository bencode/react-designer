import React, { useState } from 'react';
import cx from 'classnames';
import $t from 'prop-types';
import IconButton from '@/components/IconButton';
import * as types from '../types';
import DownIcon from './img/down.svg';
import RightIcon from './img/right.svg';
import style from './style.less';


const Outline = ({ dispatch, widget, edit }) => {
  return (
    <div className={style.outline}>
      <Node dispatch={dispatch} edit={edit} indent={0} node={widget} />
    </div>
  );
};


Outline.propTypes = {
  dispatch: $t.func.isRequired,
  widget: types.Node.isRequired,
  edit: $t.shape({
    outlineHover: $t.number
  })
};


export default Outline;


const Node = ({ dispatch, edit, indent, node }) => {
  const [collapsed, setCollapsed] = useState(false);
  const has = hasChildren(node) && !isTextElement(node);
  const handleHover = id => () => {
    dispatch({ type: 'page/hover', target: 'simulator', id });
  };
  return (
    <div className={`${style.node} type-${node.type} indent-${indent}`}>
      <div className={cx('header', hoverClassName(node, edit))}
          onMouseEnter={handleHover(node.id)} onMouseLeave={handleHover(null)}>
        <div className="spacer"></div>
        <div className="icon">
          {has &&
            <IconButton
              icon={collapsed ? <RightIcon /> : <DownIcon />}
              onClick={() => setCollapsed(!collapsed)} />
          }
        </div>
        <div className="title">
          {node.type === 'text' ? node.body :
            isTextElement(node) ? renderTextElement(node, edit) :
              node.type === 'element' ? `<${node.tag}>` : null
          }
        </div>
      </div>
      { has &&
        <ul className={cx('children', { collapsed })}>
        {
          node.children.map(child => (
            <li key={child.id}>
              <Node dispatch={dispatch} edit={edit} indent={indent + 1} node={child} />
            </li>
          ))
        }
        </ul>
      }
    </div>
  );
};

Node.propTypes = {
  dispatch: $t.func.isRequired,
  edit: $t.object.isRequired,
  indent: $t.number.isRequired,
  node: types.Node.isRequired
};


function renderTextElement(node, edit) {
  const child = node.children[0];
  return (
    <span>
      {`<${node.tag}>`}
      <span className={hoverClassName(child, edit)}>
        {child.body}
      </span>
    </span>
  );
}

function hasChildren(node) {
  return node.type === 'element' && node.children && node.children.length > 0;
}

function isTextElement(node) {
  return hasChildren(node) && node.children.length === 1 && node.children[0].type === 'text';
}

function hoverClassName(node, edit) {
  return node.id === edit.outlineHover ? 'vx-hover' : null;
}
