import React from 'react';
import { connect } from 'react-redux';
import { updateMeneAction } from './redux/actions/actions';
import getAPI from './services/requestAPI';

class App extends React.Component {
 constructor(){
   super();
   this.state = {
     index:0,
   }
 }
  componentDidMount(){
   
    this.props.updateMemes(getAPI());
  }

  render() {
    const {index} = this.state;
    const {memes} = this.props;
    return (
      <div className="App">
        <h1>esta Funcionando</h1>
        <button onClick={()=>this.setState({index:index + 1})}>Next</button>
        <div>{memes.length >0 ? <img src={ memes[index].url}/> : null}</div>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
memes: state.memes,
})

const mapDispatchToProps = (dispatch) =>({
  updateMemes: (dataAPI) => dispatch(updateMeneAction(dataAPI)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
