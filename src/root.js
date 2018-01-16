import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import Router from './routes';

import configureStore from './store/config';

const { persistor, store } = configureStore();

console.disableYellowBox = true;

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate
          persistor={persistor}>
          <Router />
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
