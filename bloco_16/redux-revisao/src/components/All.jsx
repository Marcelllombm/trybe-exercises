import React, { Component } from 'react'
import {connect} from 'react-redux';
import {WrapperList} from '../style';

class All extends Component {
  render() {
    const {arrayList} = this.props;
    return (
      <WrapperList>
        <ul>
          {arrayList.map(item => <li>{item}</li> )}
        </ul>
      </WrapperList>
    )
  }
}

const mapStateToProps = (state) =>{
const {lista} = state;
return ({
  arrayList: lista,
});
};

export default connect(mapStateToProps,null)(All);