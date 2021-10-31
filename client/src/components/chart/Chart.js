import React, {useRef, useEffect, useState} from 'react';
import Responsive from 'components/common/general/Responsive';
import styled from 'styled-components';
import * as coinSerivce from 'helpers/api/service';
import { createChart, CrosshairMode } from 'lightweight-charts';
import { refineNum } from 'helpers/calculation/calculator';


const ChartBlock = styled(Responsive)`
    z-index: 0;
`;

const ChartWrapper = styled.section`
    width: 95%;
    margin: 0 auto;
`;

const Chart = ({ gbpRate, chartInterval, coinQuery, openRef, closeRef, highRef, lowRef }) => {

    const chartRef = useRef();
    const chartWrap = useRef();

    const [chartData, setChartData] = useState(null);

    useEffect(() => {
        coinSerivce.getChartHistory(coinQuery, chartInterval)
            .then((res) => {
                setChartData(res.data);
            })
    }, [coinQuery, chartInterval])

    // generate chart
    useEffect(() => {
        if (chartData !== null && chartInterval !== null) {
            const chart = createChart(chartRef.current.id, {
                width: chartRef.current.width,
                height: 350,
                layout: {
                    backgroundColor: '',
                    textColor: 'rgba(0, 0, 0, 0.9)',
                    fontSize: 14,
                },
                grid: {
                    vertLines: { color: 'rgba(197, 203, 206, 0.5)'},
                    horzLines: { color: 'rgba(197, 203, 206, 0.5)'},
                },
                crosshair: { mode: CrosshairMode.Magnet },
                rightPriceScale: { borderColor: 'rgba(197, 203, 206, 0.8)'},
                timeScale: { borderColor: 'rgba(197, 203, 206, 0.8)'},
            });
            chart.applyOptions({
                timeScale: { timeVisible: true, secondsVisible: true },
                localization: { locale: 'en-UK' },
            });
            chart.timeScale().scrollToPosition(2, true);

            const candleSeries = chart.addCandlestickSeries({
                upColor: `#ff7045`,
                downColor: '#4555ff',
                borderDownColor: 'rgba(255, 255, 255, 1)',
                borderUpColor: 'rgba(255, 255, 255, 1)',
                wickDownColor: '#4555ff',
                wickUpColor: '#ff7045',
                // borderDownColor: 'rgba(0, 0, 0, 1)',
                // borderUpColor: 'rgba(0, 0, 0, 1)',
                // wickDownColor: 'rgba(255, 144, 0, 1)',
                // wickUpColor: 'rgba(255, 144, 0, 1)',
            });
            
            candleSeries.setData(chartData);
            
            const socketCoin = new WebSocket(`wss://stream.binance.com:9443/ws/${coinQuery.toLowerCase()}@kline_${chartInterval}`);
            socketCoin.onmessage = (e) => {
                const messageObj = JSON.parse(e.data);
                // kline chart
                const chartData = messageObj.k;
                const refinedChartData = {
                    time: chartData.t / 1000,
                    open: chartData.o * gbpRate,
                    high: chartData.h * gbpRate,
                    low: chartData.l * gbpRate,
                    close: chartData.c * gbpRate
                }
                candleSeries.update(refinedChartData);
                if (openRef.current.innerHTML) openRef.current.innerHTML = refineNum((parseFloat(chartData.o)), gbpRate);
                if (closeRef.current.innerHTML) closeRef.current.innerHTML = refineNum((parseFloat(chartData.c)), gbpRate);
                if (highRef.current.innerHTML) highRef.current.innerHTML = refineNum((parseFloat(chartData.h)), gbpRate);
                if (lowRef.current.innerHTML) lowRef.current.innerHTML = refineNum((parseFloat(chartData.l)), gbpRate);
            }

            new ResizeObserver(entries => { 
                if (entries.length === 0 || entries[0].target !== chartWrap.current) { return; } 
                const newRect = entries[0].contentRect; 
                chart.applyOptions({ width: newRect.width })}).observe(chartWrap.current); 

            return () => {
                socketCoin.close();
                setChartData(null);
                chart.remove();
            }
        }
    }, [chartData, chartInterval])

    return (
        <ChartBlock>
            <ChartWrapper ref={chartWrap}>
                <div id='chart' ref={chartRef}></div>
            </ChartWrapper>
        </ChartBlock>
    ) 
};

export default Chart;