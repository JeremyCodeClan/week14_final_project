import React from 'react';
import { useSelector } from 'react-redux';
import TableList from 'components/market/TableList'

const TableContainer = () => {
    const { bts_usd, eth_usd } = useSelector(({ saveTickers }) => ({
        bts_usd: saveTickers.bts_usd,
        eth_usd: saveTickers.eth_usd,
    }))
    
    return (
        <>
        {bts_usd !== null && eth_usd !== null ? 
            <TableList bts_usd={bts_usd} eth_usd={eth_usd} />
            :
            <></>
        }
        </>        

    )
}

export default TableContainer;