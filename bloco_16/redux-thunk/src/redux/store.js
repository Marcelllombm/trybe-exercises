import {createStore, applyMiddleware, compose} from 'redux';
import reducerMeme from './reducer/memes';
import thunk from 'redux-thunk';
const store =createStore(reducerMeme, compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
  );

export default store;