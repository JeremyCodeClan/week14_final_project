import React, { useRef } from 'react';
import Chart from 'components/chart/Chart'
import ChartTab from 'components/chart/ChartTab';
import PriceContainer from './PriceContainer';
import AboutAndInvest from 'components/chart/AboutAndInvest';
import { useSelector } from 'react-redux'; 
import { withRouter } from 'react-router-dom';

const ChartContainer = ({ location }) => {

    // const { } => useSelector()

    const pathSplit = location.pathname.split('/');
    const pathRemoveSymbol = pathSplit[pathSplit.length - 1].split('@');
    const pathRemoveHyphen = pathRemoveSymbol[pathRemoveSymbol.length - 1].split('-');
    const coinQuery = pathRemoveHyphen[0] + pathRemoveHyphen[1] + 'T';

    const openRef = useRef();
    const closeRef = useRef();
    const highRef = useRef();
    const lowRef = useRef();

    return (
        <>
            <PriceContainer openRef={openRef} closeRef={closeRef} highRef={highRef} lowRef={lowRef} />
            <ChartTab />
            <Chart coinQuery={coinQuery} openRef={openRef} closeRef={closeRef} highRef={highRef} lowRef={lowRef}
            />
            <AboutAndInvest />
        </>        

    )
}

export default withRouter(ChartContainer);