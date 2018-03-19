import React, { PureComponent } from 'react';
import { Field } from 'react-final-form';

export class Filter extends PureComponent {
  render() {
    return (
      <div>
        <label>
          Search:<Field type="text" component="input" name="searchPhrase" />
        </label>
        <label>
          Start date:<Field type="date" name="startDate" component="input" />
        </label>
        <label>
          End date:<Field type="date" name="endDate" component="input" />
        </label>
      </div>
    );
  }
}
