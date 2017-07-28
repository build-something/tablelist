import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom'

import Main from './components'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Route exact path="/" component={Main}/>
      </BrowserRouter>
    );
  }
}

export default App;
