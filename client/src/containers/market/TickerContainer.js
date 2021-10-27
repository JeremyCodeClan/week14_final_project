import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { initializeTicker, changeTickerField } from 'modules/tickers';
import TickerSocket from 'components/market/TickerSocket';
import { coinProductIdArr, coinLists } from 'helpers/coinlist/coinData';


const TickerContainer = () => {
    
    const dispatch = useDispatch();

    const socketTicker = useCallback((payload) => dispatch(changeTickerField(payload)), [dispatch]);
    const initialTicker = useCallback((payload) => dispatch(initializeTicker(payload)), [dispatch]);

    return (
        <>
            <TickerSocket
                socketTicker={socketTicker} 
                initialTicker={initialTicker}
                crpytoIdArr={coinProductIdArr} 
                cryptoLists={coinLists}
            />
        </>        

    )
}

export default TickerContainer;