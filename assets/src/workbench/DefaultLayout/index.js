import React, { useState } from 'react';
import $t from 'prop-types';
import { propEq } from 'ramda';
import { DraggableCore } from 'react-draggable';
import pref from '@/workbench/utils/pref';
import style from './style.less';


const regionEq = propEq('region');

const DefaultLayout = ({ parts }) => {
  const leftSize = [100, 800];
  const [width, setWidth] = useState(pref.get('leftWidth', 260));
  const handleDrag = e => {
    const next = e.pageX + 2;
    if (inrange(leftSize, next)) {
      setWidth(next);
      pref.set('leftWidth', next);
    }
  };

  const leftParts = parts.filter(regionEq('left'));
  const mainParts = parts.filter(regionEq('main'));
  const rightParts = parts.filter(regionEq('right'));

  return (
    <div className={style.layout}>
      <header className={style.header}></header>
      <main className={style.body}>
        <div className={style.left} style={{ width: `${width}px` }}>
          <Parts parts={leftParts} />
          <DraggableCore onDrag={handleDrag}>
            <div className={style.resizebar}></div>
          </DraggableCore>
        </div>
        <div className={style.main}>
          <Parts parts={mainParts} />
        </div>
        <div className={style.right}>
          <Parts parts={rightParts} />
        </div>
      </main>
    </div>
  );
};


DefaultLayout.propTypes = {
  parts: $t.array.isRequired
};

export default DefaultLayout;


const Parts = ({ parts }) => (
  <>
  {
    parts.map((part, index) => (
      <div key={index} className={style.part}>{part.component()}</div>
    ))
  }
  </>
);

Parts.propTypes = {
  parts: $t.array.isRequired
};


function inrange([min, max], now) {
  return min <= now && now <= max;
}
