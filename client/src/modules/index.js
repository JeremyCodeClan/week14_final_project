import { combineReducers } from "redux";
import tickers from './tickers'; 

const rootReducer = combineReducers({
    tickers,
})

export default rootReducer;