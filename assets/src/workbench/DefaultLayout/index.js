import React, { useState } from 'react';
import $t from 'prop-types';
import { DraggableCore } from 'react-draggable';
import style from './style.less';

const DefaultLayout = () => {
  const [width, setWidth] = useState(260);
  const handleDrag = e => {
    const pageX = e.pageX;
    setWidth(pageX + 2);
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
