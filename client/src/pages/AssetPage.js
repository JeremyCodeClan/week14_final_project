import React from 'react';
import Layout from 'components/common/general/Layout';
import TickerContainer from 'containers/common/crypto/TickerContainer';
import StatusContainer from 'containers/market/StatusContainer';

const AssetPage = () => {
    return (
        <Layout>
            <TickerContainer myAsset="true" />
            <StatusContainer />

        </Layout>
    )
}

export default AssetPage;