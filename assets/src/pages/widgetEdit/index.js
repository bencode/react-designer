import React from 'react';
import ReactDOM from 'react-dom';
import { Workbench } from '@/workbench';
import Simulator from './Simulator';
import './style.less';


const App = () => {
  const parts = [
    {
      region: 'main',
      component: () => <Simulator />
    }
  ];
  return (
    <Workbench parts={parts} />
  );
};


ReactDOM.render(<App />, document.getElementById('app'));
