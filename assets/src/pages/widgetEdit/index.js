import React from 'react';
import ReactDOM from 'react-dom';
import { Workbench } from '@/workbench';
import './style.scss';


const App = () => {
  return (
    <Workbench />
  );
};


ReactDOM.render(<App />, document.getElementById('app'));
