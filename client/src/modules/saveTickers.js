import { createAction, handleActions } from 'redux-actions';

const INITIALIZE_TICKER = 'ticker/INITIALIZE_TICKER'; 
const CHANGE_TICKER_FIELD = 'ticker/CHANGE_TICKER_FIELD';

export const initializeTicker = createAction(INITIALIZE_TICKER);
export const changeTickerField = createAction(CHANGE_TICKER_FIELD, ({ key, value }) => ({
    key,
    value
}));

const initialState = {
    bts_usd: null,
    eth_usd: null,
};

const saveTickers = handleActions(
    {
        [INITIALIZE_TICKER]: (state) => initialState,
        [CHANGE_TICKER_FIELD]: (state, { payload: { key, value } }) => ({
            ...state,
            [key]: value,
        }),
    },
    initialState,
)

export default saveTickers;