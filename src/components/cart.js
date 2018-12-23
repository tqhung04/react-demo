import React, { Component } from 'react';

class Cart extends Component {
  constructor(props) {
    super(props)

    this.setState({
      flag: 1
    })
  }

  render() {
    return (
      <div>
        <h1>This is cart!!</h1>
      </div>
    );
  }
}

export default Cart;
