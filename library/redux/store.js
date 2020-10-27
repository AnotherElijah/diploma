import {createStore} from 'redux';
import {testReducer} from "./reducer";

const initialState = {
  allElems: [],
  navBlocks: [],
  controllableChildren: [],
  currentBlock: null
}

export const store = createStore(testReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
