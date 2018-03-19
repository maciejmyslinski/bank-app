import { Component } from 'react';
import { fetchDescription } from '../../tasks/fetchDescription';

export class DescriptionProvider extends Component {
  state = {
    loading: false,
    error: false,
    description: '',
  }

  handleDescriptionRequest = async () => {
    this.setState({ loading: true });
    try {
      const description = await fetchDescription(this.props.transactionId);
      this.setState({
        loading: false,
        description,
      })
    } catch (e) {
      this.setState({
        loading: false,
        error: true,
      })
    }
  }
  
  render() {
    return this.props.render({
      ...this.state,
      fetchDescription: this.handleDescriptionRequest
    });
  }
}
