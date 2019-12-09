import React, { Component } from 'react';
import orderService from '../services/orderService';

export default class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false
    };
  }

  componentDidMount() {
    orderService.getItems(this.handleSuccess);
  }

  handleSuccess = res => {
    console.log('res', res);
  };

  render() {
    return <div>NavBar</div>;
  }
}
