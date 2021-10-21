import React from 'react';
import Layout from 'components/common/Layout';
import PriceContainer from 'containers/chart/PriceContainer';
import ChartContainer from 'containers/chart/ChartContainer';

const ChartPage = () => {
    return (
        <Layout>
            <PriceContainer />
            <ChartContainer />
        </Layout>
    )
}

export default ChartPage;