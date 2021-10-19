import { combineReducers } from "redux";
import saveTickers from './saveTickers'; 

const rootReducer = combineReducers({
    saveTickers,
})

export default rootReducer;