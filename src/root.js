import React from 'react';
import { Provider } from 'react-redux';

import Router from './routes';

import store from './store/config';

console.disableYellowBox = true;

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
