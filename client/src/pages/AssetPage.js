import React from 'react';
import Layout from 'components/common/general/Layout';
import MyTickerContainer from 'containers/asset/MyTickerContainer';
import StatusContainer from 'containers/asset/StatusContainer';
import AssetTableCointainer from 'containers/asset/AssetTableCointainer';
import AssetPieChartCointainer from 'containers/asset/AssetPieChartCointainer';
import { useSelector } from 'react-redux';

const AssetPage = () => {

    const { profile, myAssets, gbpRate, customName, customIcon, customCurrency } = useSelector(({ userProfile, userAssets, currencyGbp, currencyCustom }) => ({ 
        myAssets: userAssets.assets,
        gbpRate: currencyGbp.rate,
        profile: userProfile.profile,

        customName: currencyCustom.name,
        customIcon: currencyCustom.icon,
        customCurrency: currencyCustom.currency,
    }))

    let coinProductIdArr = [];
    if (myAssets !== null) {
        for (const one in {...myAssets}) {
            coinProductIdArr.push(one);
        }
    }

    return (
        <Layout>
            <MyTickerContainer gbpRate={gbpRate} />
            {
                profile !== null && myAssets !== null ? (
                    <>
                        <StatusContainer 
                            profile={profile} gbpRate={gbpRate} myAssets={myAssets} coinProductIdArr={coinProductIdArr} 
                            customName={customName} customIcon={customIcon} customCurrency={customCurrency}
                        />
                        <AssetPieChartCointainer gbpRate={gbpRate} myAssets={myAssets} coinProductIdArr={coinProductIdArr} />
                        <AssetTableCointainer gbpRate={gbpRate} myAssets={myAssets} coinProductIdArr={coinProductIdArr} 
                            customIcon={customIcon} customCurrency={customCurrency}
                        />
                    </>
                    ):(<></>)
            }
        </Layout>
    )
}

export default AssetPage;