import React, { Component } from 'react'
import { connect } from 'react-redux';

 class Aplicacao extends Component {
    render() {
        return (
            <div>
               <p>{this.props.valorApp}</p> 
               <br/>
               <button > + </button>
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    const {valor} = state.valores;
    return ({valorApp: valor});
}

export default connect(mapStateToProps)(Aplicacao);
