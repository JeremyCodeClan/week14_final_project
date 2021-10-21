import React from 'react';
import { useSelector } from 'react-redux';
import TableList from 'components/market/TableList'

const TableContainer = () => {
    const { bts_usdt, eth_usdt, sol_usdt, dot_usdt, doge_usdt } = useSelector(({ saveTickers }) => ({
        bts_usdt: saveTickers.bts_usdt,
        eth_usdt: saveTickers.eth_usdt,
        sol_usdt: saveTickers.sol_usdt,
        dot_usdt: saveTickers.dot_usdt,
        doge_usdt: saveTickers.doge_usdt,
    }))

    return (
        <>
        {bts_usdt !== null && eth_usdt !== null && sol_usdt !== null && dot_usdt !== null && doge_usdt !== null ? 
            <TableList 
                bts_usdt={bts_usdt}
                eth_usdt={eth_usdt}
                sol_usdt={sol_usdt}
                dot_usdt={dot_usdt}
                doge_usdt={doge_usdt}
            />
            :
            <></>
        }
        </>        

    )
}

export default TableContainer;