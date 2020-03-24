import React from 'react';
import style from './style.less';


const Library = () => {
  return (
    <div className={style.library}>
      <div className="header">Library</div>
      <div className="group">
        <div className="title">Elements</div>
        <div className="body">
        </div>
      </div>
    </div>
  );
};

Library.propTypes = {
};

export default Library;
