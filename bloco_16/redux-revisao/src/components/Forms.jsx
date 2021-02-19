import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Wrapper } from '../style';

class Forms extends Component {
  render() {
    return (
      <Wrapper>
        <h1>Lista básica do Redux</h1>
        <input type="text" onChange={({ target }) => this.props.trocaLabel(target.value)}
          value={this.props.nomeLabel} />
        <button onClick={() => { this.props.atualizaLista(this.props.nomeLabel) }} >Adicionar</button>

      </Wrapper>
    )
  }
}

const mapStateToProps = (state) => {
  const { label } = state;
  return ({
    nomeLabel: label,
  });
};

const mapDispatchToProps = (dispatch) => ({
  trocaLabel: (text) => dispatch({ type: 'TROCA_LABEL', text }),
  atualizaLista: (text) => dispatch({ type: 'ATUALIZA_LISTA', text }),
});


export default connect(mapStateToProps, mapDispatchToProps)(Forms);