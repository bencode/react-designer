import React, { useState } from 'react';
import $t from 'prop-types';
import { DraggableCore } from 'react-draggable';
import style from './style.less';

const DefaultLayout = () => {
  const leftSize = [100, 800];
  const [width, setWidth] = useState(260);
  const handleDrag = e => {
    console.log(e);
    const next = e.pageX + 2;
    if (inrange(leftSize, next)) {
      setWidth(next);
    }
  };

  return (
    <div className={style.layout}>
      <header className={style.header}>
      </header>
      <main className={style.body}>
        <div className={style.left} style={{ width: `${width}px` }}>
          <DraggableCore onDrag={handleDrag}>
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

function inrange([min, max], now) {
  return min <= now && now <= max;
}
