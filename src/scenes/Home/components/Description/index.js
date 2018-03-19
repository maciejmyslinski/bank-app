import React, { PureComponent } from 'react';

export class Descrpition extends PureComponent {
  render() {
    const { loading, error, description, fetchDescription } = this.props;
    if (loading) return <p>loading...</p>;
    if (error) return <p>error</p>;
    if (description) return <p>{description}</p>;
    return (
      <button type="button" onClick={fetchDescription}>
        show description
      </button>
    );
  }
}
