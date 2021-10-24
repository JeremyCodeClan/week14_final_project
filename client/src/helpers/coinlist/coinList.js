export const coinLists = [
    { product_id: "BTC-USD", stateKey: "btc_usd" },
    { product_id: "ETH-USD", stateKey: "eth_usd" },
    { product_id: "ADA-USD", stateKey: "ada_usd" },
    { product_id: "SOL-USD", stateKey: "sol_usd" },
    { product_id: "DOT-USD", stateKey: "dot_usd" },
    { product_id: "DOGE-USD", stateKey: "doge_usd" },
    { product_id: "UNI-USD", stateKey: "uni_usd" },
    { product_id: "AVAX-USD", stateKey: "avax_usd" },
    { product_id: "LINK-USD", stateKey: "link_usd" },
    { product_id: "LTC-USD", stateKey: "ltc_usd" },
    { product_id: "BCH-USD", stateKey: "bch_usd" },
    { product_id: "ALGO-USD", stateKey: "algo_usd" },
    { product_id: "SHIB-USD", stateKey: "shib_usd" },
    { product_id: "MATIC-USD", stateKey: "matic_usd" },
    { product_id: "XLM-USD", stateKey: "xlm_usd" },
    { product_id: "ATOM-USD", stateKey: "atom_usd" },
    { product_id: "ICP-USD", stateKey: "icp_usd" },
    { product_id: "AXS-USD", stateKey: "axs_usd" },
    { product_id: "FIL-USD", stateKey: "fil_usd" },
    { product_id: "ETC-USD", stateKey: "etc_usd" },
]

export const coinProductIdArr = coinLists.map((arr, i) => arr.product_id);
export const coinStateKeyArr = coinLists.map((arr, i) => arr.stateKey);
