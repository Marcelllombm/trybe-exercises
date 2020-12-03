import React from 'react';
import './App.css';
import colors from './data';
import MeuBotao from './MeuBotao';

class App extends React.Component {
  // constructor são metado da class 
  constructor() {
    super()
    // fazendo que o this existe na função handlechange
    this.handleChange = this.handleChange.bind(this);

    // fazendo que o this existe na função handleClick
    this.handleClick = this.handleClick.bind(this);


    // declarou um estado inicial
    this.state = {
      numeroDeXablaus: 0,
      textoDoFiltro: undefined
    }
  }

  handleClick() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeXablaus: estadoAnterior.numeroDeXablaus + 1
    }))
  }

  // criando uma funçao na class para pega o comportamento do elemento
  handleChange(event) {
    // event.target esta returnando o elemento que é o imput
    // event.target.value esta returnando o valor do elemento
    // console.log(event.target.value)

    // atualizando o state na função
    this.setState({ textoDoFiltro: event.target.value });
  }

  render() {
    return (
      <div>
        <div><input type="text" onChange={this.handleChange} /></div>
        {/* passado a função filter que filtrar o elemento na lista deacordo que digitamos no outro componente */}
        <div>{colors.filter((colorC) => (
          colorC.color === this.state.textoDoFiltro
          // criando um lista dimanica com array do objetos 
        )).map((colorCor, index) => (
          <div key={index}>{colorCor.color}</div>
        ))}
        </div>
       <button onClick={this.handleClick}>{this.state.numeroDeXablaus}</button>
       <MeuBotao/>
      </div>
    );
  }
}

export default App;
