import React from 'react';
import Chart from 'components/chart/Chart'
import ChartTab from 'components/chart/ChartTab';
import AboutAndInvest from 'components/chart/AboutAndInvest';
import { withRouter } from 'react-router-dom';

const ChartContainer = ({ location }) => {

    const pathSplit = location.pathname.split('/');
    const pathRemoveSymbol = pathSplit[pathSplit.length - 1].split('@');
    const pathRemoveHyphen = pathRemoveSymbol[pathRemoveSymbol.length - 1].split('-');
    const coinQuery = pathRemoveHyphen[0] + pathRemoveHyphen[1] + 'T';

    return (
        <>
            <ChartTab />
            <Chart coinQuery={coinQuery} />
            <AboutAndInvest />
        </>        

    )
}

export default withRouter(ChartContainer);