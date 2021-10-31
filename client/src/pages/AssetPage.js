import React from 'react';
import Layout from 'components/common/general/Layout';
import MyTickerContainer from 'containers/asset/MyTickerContainer';
import StatusContainer from 'containers/asset/StatusContainer';
import AssetTableCointainer from 'containers/asset/AssetTableCointainer';
import AssetPieChartCointainer from 'containers/asset/AssetPieChartCointainer';
import { useSelector } from 'react-redux';

const AssetPage = () => {

    const { profile, myAssets, gbpRate } = useSelector(({ userProfile, userAssets, currencyGbp }) => ({ 
        myAssets: userAssets.assets,
        gbpRate: currencyGbp.rate,
        profile: userProfile.profile,
    }))
    let coinProductIdArr = [];
    if (myAssets !== null) {
        for (const one in {...myAssets}) {
            coinProductIdArr.push(one);
        }
    }

    return (
        <Layout>
            <MyTickerContainer />
            {
                profile !== null && myAssets !== null ? (
                    <>
                        <StatusContainer profile={profile} gbpRate={gbpRate} myAssets={myAssets} coinProductIdArr={coinProductIdArr}  />
                        <AssetPieChartCointainer gbpRate={gbpRate} myAssets={myAssets} coinProductIdArr={coinProductIdArr} />
                        <AssetTableCointainer gbpRate={gbpRate} myAssets={myAssets} coinProductIdArr={coinProductIdArr} />
                    </>
                    ):(<></>)
            }
        </Layout>
    )
}

export default AssetPage;