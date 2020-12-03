import React from 'react';
import './App.css';
import Btwo from'./Btwo';


class App extends React.Component {
  constructor() {
    super()

    this.handleS = this.handleS.bind(this)
    this.state ={
      numbSec: 0
    }
  }
  
  handleS(){
    this.setState((estadaAnt, _props) => ({
      numbSec: estadaAnt.numbSec + 1
    }))
}

  render() {
    return (
      <div>
         <button onClick={this.handleS}>{this.state.numbSec}</button>
         <Btwo/>
      </div>
    );
  }
}



export default App;
