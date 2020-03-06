import React from 'react';
import ReactDOM from 'react-dom';
import style from './style.scss';


const App = () => {
  return (
    <div className={style.app}>Hello</div>
  );
};


ReactDOM.render(<App />, document.getElementById('app'));
