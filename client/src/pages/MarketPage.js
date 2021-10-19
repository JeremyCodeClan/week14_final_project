import React from 'react';
import Layout from 'components/common/Layout'
import TableContainer from 'containers/market/TableContainer'

const MarketPage = () => {
    return (
        <Layout>
            <h1>Market Page</h1>
            <TableContainer />
        </Layout>
    )
}

export default MarketPage;