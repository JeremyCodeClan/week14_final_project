import React from 'react';
import { useSelector } from 'react-redux';
import Status from 'components/asset/Status'

const StatusContainer = () => {

    const { gbpRate } = useSelector(({ currencyGbp }) => ({ gbpRate: currencyGbp.rate }))
    const { myAssets } = useSelector(({ userAssets }) => ({
        myAssets: userAssets.assets,
    }))
    let coinProductIdArr = [];
    if (myAssets !== null) {
        for (const one in {...myAssets}) {
            coinProductIdArr.push(one);
        }
    }

    return (
        <>
            <Status myAssets={myAssets} gbpRate={gbpRate} coinProductIdArr={coinProductIdArr} />
        </>        

    )
}

export default StatusContainer;