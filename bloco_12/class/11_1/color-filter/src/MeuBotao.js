import React from 'react';

export default class MeuBotao extends React.Component {
  constructor() {
    super()
    // estado atual
    this.state = {
      nunberClick: 0
    }
    // fazer o função reconhecer na class
    this.handleClick = this.handleClick.bind(this)
  }
  // função para o onclick
  handleClick() {
    this.setState((estadoAnterior, _props) => ({
      nunberClick: estadoAnterior.nunberClick + 1
    }))
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          {this.state.nunberClick}
        </button>
      </div>
    );
  }
}