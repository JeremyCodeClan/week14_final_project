import React, {useRef, useEffect, useState} from 'react';
import Responsive from 'components/common/general/Responsive';
import styled from 'styled-components';
import * as coinSerivce from 'helpers/api/service';
import { createChart, CrosshairMode } from 'lightweight-charts';


const ChartBlock = styled(Responsive)`
    margin-top: 1rem;
    z-index: 0;
`;

const ChartWrapper = styled.section`
    width: 95%;
    margin: 0 auto;
`;

const Chart = ({ coinQuery }) => {

    const chartRef = useRef();
    const chartWrap = useRef();
    const [chartData, setChartData] = useState(null);

    useEffect(() => {
        coinSerivce.getChartHistory(coinQuery)
            .then((res) => {
                setChartData(res.data);
            })
    }, [])

    // generate chart
    useEffect(() => {
        if (chartData !== null) {
            const chart = createChart(chartRef.current.id, {
                width: chartRef.current.width,
                height: 350,
                layout: {
                    backgroundColor: '',
                    textColor: 'rgba(0, 0, 0, 0.9)',
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
                upColor: 'rgba(255, 144, 0, 1)',
                downColor: '#ff1010',
                borderDownColor: 'rgba(0, 0, 0, 1)',
                borderUpColor: 'rgba(0, 0, 0, 1)',
                wickDownColor: 'rgba(255, 144, 0, 1)',
                wickUpColor: 'rgba(255, 144, 0, 1)',
            });
            
            candleSeries.setData(chartData);
            
            const socketCoin = new WebSocket(`wss://stream.binance.com:9443/ws/${coinQuery.toLowerCase()}@kline_1m`);
            socketCoin.onmessage = (e) => {
                const messageObj = JSON.parse(e.data);
                // kline chart
                const chartData = messageObj.k;
                const refinedChartData = {
                    time: chartData.t / 1000,
                    open: chartData.o,
                    high: chartData.h,
                    low: chartData.l,
                    close: chartData.c
                }
                candleSeries.update(refinedChartData);
            }

            new ResizeObserver(entries => { 
                if (entries.length === 0 || entries[0].target !== chartWrap.current) { return; } 
                const newRect = entries[0].contentRect; 
                chart.applyOptions({ width: newRect.width })}).observe(chartWrap.current); 

            return () => {
                chart.remove();
                setChartData(null);
                socketCoin.close();
            }
        }
    }, [chartData])

    return (
        <ChartBlock>
            <ChartWrapper ref={chartWrap}>
                <div id='chart' ref={chartRef}></div>
            </ChartWrapper>
        </ChartBlock>
    ) 
};

export default Chart;

// const chartRef = useRef();

// const [chartData, setChartData] = useState(null);
// // const [chart, setChart] = useState(null);

// // const [height, setHeight] = useState(300);

// // const onChangeHeight = (e) => {
// //     setHeight(parseInt(e.target.value));
// // }

// // // chart settings
// // useEffect(() => {
// //     if (chart !== null) {
// //         chart.resize(600, height);
// //     }
// // }, [height, chart])

// useEffect(() => {
//     fetch('http://localhost:5000/history')
//     .then((r) => r.json())
//     .then((response) => {
//         setChartData(response);
//     })
// }, [])

// // generate chart
// useEffect(() => {
//     if (chartData !== null) {
//     const chart = createChart(chartRef.current.id, {
//         width: 600,
//         height: 300,
//         layout: {
//             backgroundColor: '#ffffff',
//             textColor: 'rgba(0, 0, 0, 0.9)',
//         },
//         grid: {
//             vertLines: {
//                 color: 'rgba(197, 203, 206, 0.5)',
//             },
//             horzLines: {
//                 color: 'rgba(197, 203, 206, 0.5)',
//             },
//         },
//         crosshair: {
//             mode: CrosshairMode.Normal,
//         },
//         rightPriceScale: {
//             borderColor: 'rgba(197, 203, 206, 0.8)',
//         },
//         timeScale: {
//             borderColor: 'rgba(197, 203, 206, 0.8)',
//         },
//     });
//     // setChart(chart);

//     const candleSeries = chart.addCandlestickSeries({
//         upColor: 'rgba(255, 144, 0, 1)',
//         downColor: '#ff1010',
//         borderDownColor: 'rgba(0, 0, 0, 1)',
//         borderUpColor: 'rgba(0, 0, 0, 1)',
//         wickDownColor: 'rgba(255, 144, 0, 1)',
//         wickUpColor: 'rgba(255, 144, 0, 1)',
//     });

//     candleSeries.setData(chartData);
    
//     const socketCoin = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@kline_1m");
//     socketCoin.onmessage = (e) => {
//         const messageObj = JSON.parse(e.data);

//         // kline chart
//         const chartData = messageObj.k;
//         const refinedChartData = {
//             time: chartData.t / 1000,
//             open: chartData.o,
//             high: chartData.h,
//             low: chartData.l,
//             close: chartData.c
//         }
//         candleSeries.update(refinedChartData);
//     }

//     socketCoin.onclose = () => {
//         setTimeout(() => {
//             setChartData(null);
//         }, 1000);
//     };
// }
// }, [chartData])