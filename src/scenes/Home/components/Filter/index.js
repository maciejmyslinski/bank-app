import React, { PureComponent } from 'react';

export class Filter extends PureComponent {
  render() {
    return (
      <div>
        <label>
          Search:<input type="text" />
        </label>
        <label>
          Start date:<input
            type="date"
            onChange={e => console.log(e.target.valueAsDate)}
          />
        </label>
        <label>
          End date:<input type="date" />
        </label>
      </div>
    );
  }
}
