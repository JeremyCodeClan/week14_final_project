import React from 'react';
import AssetPieChart from 'components/asset/AssetPieChart';


const AssetPieChartCointainer = ({ gbpRate, myAssets, coinProductIdArr }) => {

    let chartData = [
        ['Asset Code', 'Value'],
    ]
    if (myAssets !== null) {
        coinProductIdArr.forEach((code) => {
            chartData.push([
                code, parseFloat(parseFloat(myAssets[code].currentTotal).toFixed(2))
            ])
        });
    }

    return (
        <AssetPieChart gbpRate={gbpRate} myAssets={myAssets} chartData={chartData} />
    )
}

export default AssetPieChartCointainer;