import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Home } from './scenes/Home';
import { Cashflow } from './scenes/Cashflow';
import { Navbar } from './components/Navbar';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/cashflow" component={Cashflow} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
