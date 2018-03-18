import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

export class Navbar extends PureComponent {
  render() {
    return (
      <div>
        <Link to="/">History</Link>
        <Link to="/cashflow">Cashflow</Link>
      </div>
    );
  }
}
