import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import tickers from './tickers'; 
import auth from './auth';
import userAssets from "./userAssets";
import userProfile from "./userProfile";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["auth"]
};

const rootReducer = combineReducers({
    tickers,
    auth,
    userAssets,
    userProfile
})

export default persistReducer(persistConfig, rootReducer);