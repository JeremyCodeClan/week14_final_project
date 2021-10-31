import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import tickers from './tickers'; 
import auth from './auth';
import userAssets from "./userAssets";
import userProfile from "./userProfile";
import currencyGbp from "./currencyGbp";
import currencyCustom from "./currencyCustom";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["auth"]
};

const rootReducer = combineReducers({
    tickers,
    auth,
    userAssets,
    userProfile,
    currencyGbp,
    currencyCustom,
})

export default persistReducer(persistConfig, rootReducer);