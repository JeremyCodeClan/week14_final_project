import React from 'react';
import Layout from 'components/common/general/Layout';
import ChartContainer from 'containers/chart/ChartContainer';
import { useSelector } from 'react-redux';

const ChartPage = () => {

    const { gbpRate } = useSelector(({ currencyGbp }) => ({ gbpRate: currencyGbp.rate }))


    return (
        <Layout>
            <ChartContainer gbpRate={gbpRate} />
        </Layout>
    )
}

export default ChartPage;