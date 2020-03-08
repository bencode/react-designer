import React from 'react';
import $t from 'prop-types';
import style from './style.scss';

const DefaultLayout = ({ parts }) => {
  return (
    <div className={style.layout}>
      <header className={style.header}>
      </header>
      <main className={style.body}>
        <div className={style.left}>
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
