import React from 'react';
import style from './style.less';

const Library = () => {
  const basics = [
  ];
  return (
    <div className={style.library}>
      <div className="group">
        <div className="title">Basic</div>
        <div className="body">
          <ul>
            <li>div</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

Library.propTypes = {

};

export default Library;
