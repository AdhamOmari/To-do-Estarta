import { combineReducers } from "redux";
import { AddToDoReducer } from './Todo/reducer'


const allReducer = combineReducers({
    AddToDoReducer
})


export default allReducer