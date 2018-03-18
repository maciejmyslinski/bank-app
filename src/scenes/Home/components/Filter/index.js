import React, { PureComponent } from 'react';

export class Filter extends PureComponent {
  render() {
    return (
      <div>
        <label>
          Search:<input type="text" />
        </label>
      </div>
    );
  }
}
