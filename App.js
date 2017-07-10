import React from 'react';
import { Provider } from 'react-redux';
import getStore from './src/store';
import AppNavigation from './src';

const store = getStore();

const App = () =>
  <Provider store={store}>
    <AppNavigation />
  </Provider>;

export default App;
