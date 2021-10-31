import React, { useCallback } from 'react';
import { useSelector, useDispatch  } from 'react-redux';
import { changeMyTickerField, initializeAssets } from 'modules/userAssets';
import MyTickerSocket from 'components/asset/MyTickerSocket';
import { coinLists } from 'helpers/coinlist/coinData';

const MyTickerContainer = () => {
    
    const dispatch = useDispatch();
    const onChangeMyTicker = useCallback((payload) => dispatch(changeMyTickerField(payload)), [dispatch]);

    const { assets } = useSelector(({ userAssets }) => ({
        assets: userAssets.assets,
    }));

    let coinProductIdArr = [];
    if (assets !== null) {
        for (const one in {...assets}) {
            coinProductIdArr.push(one+'-USD');
        }
    }

    return (
        <>
            {assets !== null ? (
                <MyTickerSocket
                onChangeMyTicker={onChangeMyTicker}
                crpytoIdArr={coinProductIdArr}
                cryptoLists={coinLists}
                assets={assets}
            />
            ):(
            <></>
            )}
            
        </>        

    )
}

export default MyTickerContainer;