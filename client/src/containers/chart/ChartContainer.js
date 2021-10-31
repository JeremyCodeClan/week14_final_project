import React, { useRef, useState } from 'react';
import Chart from 'components/chart/Chart'
import ChartTab from 'components/chart/ChartTab';
import PriceContainer from './PriceContainer';
import AboutCoin from 'components/chart/AboutCoin';
import { withRouter } from 'react-router-dom';

const ChartContainer = ({ location, gbpRate }) => {

    const [chartInterval, SetChartInterval] = useState('1m');
    const openRef = useRef();
    const closeRef = useRef();
    const highRef = useRef();
    const lowRef = useRef();

    const pathSplit = location.pathname.split('/');
    const pathRemoveSymbol = pathSplit[pathSplit.length - 1].split('@');
    const pathRemoveHyphen = pathRemoveSymbol[pathRemoveSymbol.length - 1].split('-');
    const coinQuery = pathRemoveHyphen[0] + pathRemoveHyphen[1] + 'T';
    const coinCode = pathRemoveHyphen[0];

    const handleChartInterval = (value) => SetChartInterval(value);
    
    return (
        <>
            <PriceContainer coinCode={coinCode} gbpRate={gbpRate} openRef={openRef} closeRef={closeRef} highRef={highRef} lowRef={lowRef} />
            <ChartTab handleChartInterval={handleChartInterval} chartInterval={chartInterval} />
            <Chart gbpRate={gbpRate} chartInterval={chartInterval} coinQuery={coinQuery} openRef={openRef} closeRef={closeRef} highRef={highRef} lowRef={lowRef} />
            <AboutCoin coinCode={coinCode} />
        </>        

    )
}

export default withRouter(ChartContainer);