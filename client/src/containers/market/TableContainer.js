import React from 'react';
import { useSelector } from 'react-redux';
import TableList from 'components/market/TableList'

const TableContainer = () => {
    const { 
        btc_usd, eth_usd, ada_usd, sol_usd, dot_usd, doge_usd, uni_usd, avax_usd, link_usd, ltc_usd, 
        bch_usd, algo_usd, shib_usd, matic_usd, xlm_usd, atom_usd, icp_usd, axs_usd, fil_usd, etc_usd,
        gbpRate
    } = useSelector(({ tickers, currencyGbp }) => ({
        btc_usd: tickers.btc_usd,
        eth_usd: tickers.eth_usd,
        ada_usd: tickers.ada_usd,
        usdt_usd: tickers.usdt_usd,
        sol_usd: tickers.sol_usd,
        dot_usd: tickers.dot_usd,
        doge_usd: tickers.doge_usd,
        uni_usd: tickers.uni_usd,
        avax_usd: tickers.avax_usd,
        link_usd: tickers.link_usd,
        wbtc_usd: tickers.wbtc_usd,
        ltc_usd: tickers.ltc_usd,
        bch_usd: tickers.bch_usd,
        algo_usd: tickers.algo_usd,
        shib_usd: tickers.shib_usd,
        matic_usd: tickers.matic_usd,
        xlm_usd: tickers.xlm_usd,
        atom_usd: tickers.atom_usd,
        icp_usd: tickers.icp_usd,
        axs_usd: tickers.axs_usd,
        fil_usd: tickers.fil_usd,
        etc_usd: tickers.etc_usd,
        gbpRate: currencyGbp.rate,
    }))

    const coinArr = [
        btc_usd, eth_usd, ada_usd, sol_usd, dot_usd, doge_usd, uni_usd, avax_usd, link_usd, ltc_usd, 
        bch_usd, algo_usd, shib_usd, matic_usd, xlm_usd, atom_usd, icp_usd, axs_usd, fil_usd, etc_usd
    ]

    return (
        <TableList coinArr={coinArr} gbpRate={gbpRate} />
    )
}

export default TableContainer;