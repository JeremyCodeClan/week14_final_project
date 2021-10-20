import React from 'react';
import Layout from 'components/common/Layout'
import TickerContainer from 'containers/market/TickerContainer'
import InvestedContainer from 'containers/market/InvestedContainer'
import TableContainer from 'containers/market/TableContainer';

const MarketPage = () => {
    return (
        <Layout>
            <TickerContainer />
            <InvestedContainer />
            <TableContainer />
        </Layout>
    )
}

export default MarketPage;