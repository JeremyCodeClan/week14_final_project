import { createAction, handleActions } from 'redux-actions';

const INITIALIZE_TICKER = 'ticker/INITIALIZE_TICKER'; 
const CHANGE_TICKER_FIELD = 'ticker/CHANGE_TICKER_FIELD';

export const initializeTicker = createAction(INITIALIZE_TICKER);
export const changeTickerField = createAction(CHANGE_TICKER_FIELD, ({ key, value }) => ({
    key,
    value
}));

const initialState = {
    btc_usd: null,
    eth_usd: null,
    ada_usd: null,
    sol_usd: null,
    dot_usd: null,
    doge_usd: null,
    uni_usd: null,
    avax_usd: null,
    link_usd: null,
    ltc_usd: null,
    bch_usd: null,
    algo_usd: null,
    shib_usd: null,
    matic_usd: null,
    xlm_usd: null,
    atom_usd: null,
    icp_usd: null,
    axs_usd: null,
    fil_usd: null,
    etc_usd: null
};

const tickers = handleActions(
    {
        [INITIALIZE_TICKER]: (state) => initialState,
        [CHANGE_TICKER_FIELD]: (state, { payload: { key, value } }) => ({
            ...state,
            [key]: value,
        }),
    },
    initialState,
)

export default tickers;