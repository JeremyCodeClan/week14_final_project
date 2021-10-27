import React from 'react';
import AssetTableList from 'components/asset/AssetTableList';

const AssetTableCointainer = ({ gbpRate, coinProductIdArr, myAssets }) => {

    return (
        <AssetTableList myAssets={myAssets} coinProductIdArr={coinProductIdArr} gbpRate={gbpRate} />
    )
}

export default AssetTableCointainer;