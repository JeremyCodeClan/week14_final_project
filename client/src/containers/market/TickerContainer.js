import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { initializeTicker, changeTickerField } from 'modules/saveTickers';
import TickerSocket from 'components/market/TickerSocket';

const TickerContainer = () => {
    
    const dispatch = useDispatch();

    const socketTicker = useCallback((payload) => dispatch(changeTickerField(payload)), [dispatch]);
    const initialTicker = useCallback((payload) => dispatch(initializeTicker()), [dispatch]); 

    return (
        <>
            <TickerSocket socketTicker={socketTicker} initialTicker={initialTicker} />
        </>        

    )
}

export default TickerContainer;