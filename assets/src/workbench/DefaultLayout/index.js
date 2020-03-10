import React from 'react';
import $t from 'prop-types';
import { DraggableCore } from 'react-draggable';
import style from './style.less';

const DefaultLayout = () => {
  return (
    <div className={style.layout}>
      <header className={style.header}>
      </header>
      <main className={style.body}>
        <div className={style.left}>
          <DraggableCore>
            <div className={style.resizebar}></div>
          </DraggableCore>
        </div>
        <div className={style.main}>
        </div>
        <div className={style.right}>
        </div>
      </main>
    </div>
  );
};


DefaultLayout.propTypes = {
  parts: $t.arrayOf($t.node).isRequired
};

export default DefaultLayout;
