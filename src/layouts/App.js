import React from 'react';
import { hot } from 'react-hot-loader';
/*import {
    BrowserRouter,
    Route,
    Link,
    Switch,
    hashHistory
} from 'react-router-dom';*/

import Routes from '../routes';
import Header from './Header';

class App extends React.Component {
  render() {
    return (
      <div>
        <div id="headerContent">
          <Header />
        </div>
        <div id="mainContent">
          <Routes />
        </div>
      </div>
    );
  }
}

export default hot(module)(App)
