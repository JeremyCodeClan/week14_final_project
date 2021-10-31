import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

const INITIALIZE_TICKER = 'ticker/INITIALIZE_TICKER'; 
const CHANGE_TICKER_FIELD = 'ticker/CHANGE_TICKER_FIELD';

export const initializeTicker = createAction(INITIALIZE_TICKER);
export const changeTickerField = createAction(CHANGE_TICKER_FIELD, ({ product, key, data }) => ({
    product,
    key,
    data
}));

const initialState = {
    btc_usd: {
        fullname: "Bitcoin",
        code: "BTC",
        value: null,
    },
    eth_usd: {
        fullname: "Ethereum",
        code: "ETH",
        value: null,
    },
    ada_usd: {
        fullname: "Cardano",
        code: "ADA",
        value: null,
    },
    sol_usd: {
        fullname: "Solana",
        code: "SOL",
        value: null,
    },
    dot_usd: {
        fullname: "Polkadot",
        code: "DOT",
        value: null,
    },
    doge_usd: {
        fullname: "Dogecoin",
        code: "DOGE",
        value: null,
    },
    uni_usd: {
        fullname: "Uniswap",
        code: "UNI",
        value: null,
    },
    avax_usd: {
        fullname: "Avalanche",
        code: "AVAX",
        value: null,
    },
    link_usd: {
        fullname: "Chainlink",
        code: "LINK",
        value: null,
    },
    ltc_usd: {
        fullname: "Litecoin",
        code: "LTC",
        value: null,
    },
    bch_usd: {
        fullname: "Bitcoin Cash",
        code: "BCH",
        value: null,
    },
    algo_usd: {
        fullname: "Algorand",
        code: "ALGO",
        value: null,
    },
    shib_usd: {
        fullname: "Shiba Inu",
        code: "SHIB",
        value: null,
    },
    matic_usd: {
        fullname: "Polygon",
        code: "MATIC",
        value: null,
    },
    xlm_usd: {
        fullname: "Stellar Lumens",
        code: "XLM",
        value: null,
    },
    atom_usd: {
        fullname: "Cosmos",
        code: "ATOM",
        value: null,
    },
    icp_usd: {
        fullname: "Internet Computer",
        code: "ICP",
        value: null,
    },
    axs_usd: {
        fullname: "Axie Infinity",
        code: "AXS",
        value: null,
    },
    fil_usd: {
        fullname: "Filecoin",
        code: "FIL",
        value: null,
    },
    etc_usd: {
        fullname: "Ethereum Classic",
        code: "ETC",
        value: null,
    }
};


const tickers = handleActions(
    {
        [INITIALIZE_TICKER]: (state) => initialState,
        [CHANGE_TICKER_FIELD]: (state, { payload: { product, key, data } }) =>
            produce(state, draft => {
                draft[product][key] = data;
        }),
    },
    initialState,
)

export default tickers;


// [CHANGE_TICKER_FIELD]: (state, { payload: { key, value } }) => ({
//     ...state,
//     [key]: value,
// }),