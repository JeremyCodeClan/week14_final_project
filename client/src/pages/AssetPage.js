import React from 'react';
import Layout from 'components/common/general/Layout';
import MyTickerContainer from 'containers/asset/MyTickerContainer';
import StatusContainer from 'containers/asset/StatusContainer';
import AssetTableCointainer from 'containers/asset/AssetTableCointainer';

const AssetPage = () => {
    return (
        <Layout>
            <MyTickerContainer />
            <StatusContainer />
            <AssetTableCointainer />
        </Layout>
    )
}

export default AssetPage;