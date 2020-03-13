import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { createStoreEnhancer } from '@hyder/component';
import { Workbench } from '@/workbench';
import pageModel from './models/page';
import Simulator from './Simulator';
import './style.less';


const hyderEnhancer = createStoreEnhancer();

const store = createStore(v => v, {}, hyderEnhancer);

hyderEnhancer.add([
  pageModel
]);


const App = () => {
  const parts = [
    {
      region: 'main',
      component: () => <Simulator />
    }
  ];
  return (
    <Provider store={store}>
      <Workbench parts={parts} />
    </Provider>
  );
};


ReactDOM.render(<App />, document.getElementById('__pageviver__app'));
