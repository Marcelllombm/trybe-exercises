import React from 'react';

class Btwo extends React.Component {
  constructor() {
   super()
    this.handleBt = this.handleBt.bind(this)
    this.state = {
      number: 0
    }

  }

  handleBt() {
    this.setState((ant, _props) =>({
      number: ant.number + 1
    }))
  }

  render() {
    return (
    <button onClick={this.handleBt}>{this.state.number}</button>
    );
  }
}

export default Btwo