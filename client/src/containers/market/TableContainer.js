import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { initializeTicker, changeTickerField } from '../../modules/saveTickers';
import TableSocket from 'components/market/TableSocket'

const TableContainer = () => {
    
    const dispatch = useDispatch();

    const socketTicker = useCallback((payload) => dispatch(changeTickerField(payload)), [dispatch]);
    const initialTicker = useCallback((payload) => dispatch(initializeTicker()), [dispatch]); 

    return (
        <>
            <h1>Table</h1>
            <TableSocket socketTicker={socketTicker} initialTicker={initialTicker} />
        </>        

    )
}

export default TableContainer;