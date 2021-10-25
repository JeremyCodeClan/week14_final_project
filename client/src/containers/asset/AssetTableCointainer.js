import React from 'react';
import { useSelector } from 'react-redux';
import AssetTableList from 'components/asset/AssetTableList';

const AssetTableCointainer = () => {

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
        <AssetTableList myAssets={myAssets} coinProductIdArr={coinProductIdArr} gbpRate={gbpRate} />
    )
}

export default AssetTableCointainer;