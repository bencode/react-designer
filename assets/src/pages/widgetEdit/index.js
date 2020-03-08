import React from 'react';
import ReactDOM from 'react-dom';
import { Workbench } from '@/workbench';
import './style.scss';


const App = () => {
  const parts = [];
  return (
    <Workbench parts={parts} />
  );
};


ReactDOM.render(<App />, document.getElementById('app'));
