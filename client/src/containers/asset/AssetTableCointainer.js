import React from 'react';
import AssetTableList from 'components/asset/AssetTableList';

const AssetTableCointainer = ({ 
    gbpRate, coinProductIdArr, myAssets,
    customIcon, customCurrency,
    }) => {

    return (
        <AssetTableList 
            myAssets={myAssets} coinProductIdArr={coinProductIdArr} gbpRate={gbpRate}
            customIcon={customIcon} customCurrency={customCurrency}
        />
    )
}

export default AssetTableCointainer;