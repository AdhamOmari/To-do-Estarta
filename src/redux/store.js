import { createStore, applyMiddleware, compose } from 'redux';

import thunk from 'redux-thunk'
import AllReducer from './allreducer'



const store = createStore(AllReducer, applyMiddleware(thunk));

// add
export { store };