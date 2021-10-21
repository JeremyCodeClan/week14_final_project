import React from 'react';
import Layout from 'components/common/Layout'
import TickerContainer from 'containers/market/TickerContainer'
import StatusContainer from 'containers/market/StatusContainer'
import TableContainer from 'containers/market/TableContainer';

const MarketPage = () => {
    return (
        <Layout>
            <TickerContainer />
            <StatusContainer />
            <TableContainer />
        </Layout>
    )
}

export default MarketPage;