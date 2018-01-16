import React from 'react';

import Router from './routes';

console.disableYellowBox = true;

class App extends React.Component {
  render() {
    return (
      <Router />
    );
  }
}

export default App;
