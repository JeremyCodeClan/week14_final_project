import React from 'react';
import Layout from 'components/common/general/Layout';
import TickerContainer from 'containers/market/TickerContainer';
import TableContainer from 'containers/market/TableContainer';

const MarketPage = () => {
    return (
        <Layout>
            <TickerContainer />
            <TableContainer />
        </Layout>
    )
}

export default MarketPage;