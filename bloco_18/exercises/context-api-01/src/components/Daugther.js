import React, { Component } from 'react'
import MyContext from './MyContext';

 class Daugther extends Component {
  render() {
    return (
      <div>
        <MyContext.Consumer>
        {
          value => console.log(value)
        }
        </MyContext.Consumer>
        
      </div>
    )
  }
}

export default Daugther;
