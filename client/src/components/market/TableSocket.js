import React, { useEffect } from 'react';

const TableSocket = ({ socketTicker, initialTicker }) => {

    useEffect(() => {

        // ticker socket setting
        const socketCoin = new WebSocket("wss://ws-feed.pro.coinbase.com");
        socketCoin.onopen = () => {
            socketCoin.send(JSON.stringify({
                "type": "subscribe",
                "channels": [
                    {
                        "name": "ticker",
                        "product_ids": ["BTC-USD", "ETH-USD"]
                    }
                ]
            }))
        };
        // connect socket to redux state
        socketCoin.onmessage = (e) => {
            const messageObj = JSON.parse(e.data);
            console.log(messageObj);
            const refinedData = {
                name: messageObj.product_id,
                currentPrice: parseInt(messageObj.price),
                openPrice: parseInt(messageObj.open_24h),
                dailyVolume: parseInt(messageObj.volume_24h)
            }
            if (refinedData.name === "BTC-USD") { socketTicker({ key: 'bts_usd', value: refinedData }) }
            if (refinedData.name === "ETH-USD") { socketTicker({ key: 'eth_usd', value: refinedData }) }
        }

        // disconnect socket & initialize state
        return () => {
            socketCoin.close();
            initialTicker();
        }
        // {"type":"ticker","sequence":30317640122,"product_id":"BTC-USD","price":"63978.09","open_24h":"61423.1","volume_24h":"16285.30005051","low_24h":"61127.81","high_24h":"64049.99","volume_30d":"444672.62064311","best_bid":"63973.77","best_ask":"63979.30","side":"buy","time":"2021-10-19T19:52:27.044104Z","trade_id":223589438,"last_size":"0.00904148"}
        // {"type":"ticker","sequence":21829534572,"product_id":"ETH-USD","price":"3816.12","open_24h":"3746.24","volume_24h":"153392.89017322","low_24h":"3700","high_24h":"3861.64","volume_30d":"5730061.12576934","best_bid":"3816.12","best_ask":"3816.13","side":"sell","time":"2021-10-19T19:52:27.315022Z","trade_id":168265885,"last_size":"0.21621896"}
    }, [])
  
    return (
        <></>
    )
};

export default TableSocket;







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