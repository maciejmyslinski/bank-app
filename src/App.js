import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Home } from './scenes/Home';
import { Cashflow } from './scenes/Cashflow';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/cashflow" component={Cashflow} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
