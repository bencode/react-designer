import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { createStoreEnhancer } from '@hyder/component';
import pageModel from './models/page';
import Page from './Page';


const hyderEnhancer = createStoreEnhancer();

const store = createStore(v => v, {}, hyderEnhancer);

hyderEnhancer.add([
  pageModel
]);


const App = () => {
  return (
    <Provider store={store}>
      <Page />
    </Provider>
  );
};


ReactDOM.render(<App />, document.getElementById('__pageviver__app'));
