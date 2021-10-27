import React, { useEffect } from 'react';
import { refineNum } from 'helpers/calculation/calculator';

const MyTickerSocket = ({ gbpRate, onChangeMyTicker, crpytoIdArr, cryptoLists, assets }) => {

    useEffect(() => {
        // ticker socket setting
        const socketCoin = new WebSocket("wss://ws-feed.pro.coinbase.com");
        socketCoin.onopen = () => {
            socketCoin.send(JSON.stringify({
                "type": "subscribe",
                "channels": [
                    {
                        "name": "ticker",
                        "product_ids": crpytoIdArr
                    }
                ]
            }))
        };
        // connect socket to redux state
        socketCoin.onmessage = (e) => {
            const messageObj = JSON.parse(e.data);
            const refinedData = {
                name: messageObj.product_id,
                currentPrice: parseFloat(messageObj.price),
                openPrice: parseFloat(messageObj.open_24h),
                dailyVolume: parseFloat(messageObj.volume_24h)
            }
            cryptoLists.forEach((coin, index) => {
                if (refinedData.name === coin.product_id) {
                    const amount = assets[coin.code].amount;
                    const current = refinedData.currentPrice;
                    const open = refinedData.openPrice;
                    onChangeMyTicker({ advanced: "assets", product: coin.code, key: 'currentValue', data: refineNum((parseFloat(refinedData.currentPrice)), gbpRate)})
                    onChangeMyTicker({ advanced: "assets", product: coin.code, key: 'openValue', data: refineNum((parseFloat(refinedData.openPrice)), gbpRate)})
                    onChangeMyTicker({ advanced: "assets", product: coin.code, key: 'currentTotal', data: (amount * current).toFixed(4)})
                    onChangeMyTicker({ advanced: "assets", product: coin.code, key: 'openTotal', data: (amount * open).toFixed(4)})
                }
            })
        }
        
        // disconnect socket & initialize state
        return () => {
            socketCoin.close();
        }
    }, [])
  
    return (
        <></>
    )
};

export default MyTickerSocket;







// import { createChart, CrosshairMode } from 'lightweight-charts';

// const chartRef = useRef();

// const [chartData, setChartData] = useState(null);
// const [chart, setChart] = useState(null);

// const [height, setHeight] = useState(300);

// const onChangeHeight = (e) => {
//     setHeight(parseInt(e.target.value));
// }

// // chart settings
// useEffect(() => {
//     if (chart !== null) {
//         chart.resize(600, height);
//     }
// }, [height, chart])

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
//     setChart(chart);

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





    // const dateObj = new Date(messageObj.E);
    // const year = dateObj.getFullYear();
    // const month = ("0" + (dateObj.getMonth() + 1)).slice(-2);
    // const date = ("0" + dateObj.getDate()).slice(-2);
    // const hours = ("0" + dateObj.getHours()).slice(-2);
    // const minutes = ("0" + dateObj.getMinutes()).slice(-2);
    // const seconds = ("0" + dateObj.getSeconds()).slice(-2);
    // const dateString = year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds;
    // const openValue = parseInt(messageObj.o);
    // const highValue = parseInt(messageObj.h);
    // const lowValue = parseInt(messageObj.l);
    // const closeValue = parseInt(messageObj.c);
    // const chartData = {
    //     time: dateString,
    //     open: openValue,
    //     high: highValue,
    //     low: lowValue,
    //     close: closeValue
    // };
    // candleSeries.update(chartData)