import React, { useCallback } from 'react';
import { useSelector, useDispatch  } from 'react-redux';
import { initializeTicker, changeTickerField } from 'modules/tickers';
import TickerSocket from 'components/common/crypto/TickerSocket';
import { coinProductIdArr, coinLists } from 'helpers/coinlist/coinList';


const TickerContainer = ({ myAsset }) => {
    
    const dispatch = useDispatch();
    const {  } = useSelector(({ }) => {
        
    })

    if (myAsset) {
        console.log(myAsset);
    }

    const socketTicker = useCallback((payload) => dispatch(changeTickerField(payload)), [dispatch]);
    const initialTicker = useCallback(() => dispatch(initializeTicker()), [dispatch]); 

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