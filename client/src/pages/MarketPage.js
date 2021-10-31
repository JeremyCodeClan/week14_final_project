import React from 'react';
import Layout from 'components/common/general/Layout';
import TickerContainer from 'containers/market/TickerContainer';
import TableContainer from 'containers/market/TableContainer';
import { useSelector } from 'react-redux';

const MarketPage = () => {

    const { gbpRate } = useSelector(({ currencyGbp }) => ({ gbpRate: currencyGbp.rate }))

    return (
        <Layout>
            <TickerContainer />
            <TableContainer gbpRate={gbpRate} />
        </Layout>
    )
}

export default MarketPage;