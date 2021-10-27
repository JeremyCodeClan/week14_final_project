/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-undef */





useEffect(() => {
    // API Call
    coinSerivce.getChartHistory(coinQuery, chartInterval)
        .then((res) => {
            setChartData(res.data);
        })
}, [coinQuery, chartInterval])


useEffect(() => {
    if (chartData !== null && chartInterval !== null) {
        const chart = createChart(chartRef.current.id, {
            // chart opetions
            // .
            // .
        })
        const candleSeries = chart.addCandlestickSeries({
            // kline chart options (kline chart styling)
            // .
            // .
        })
        candleSeries.setData(chartData)

        const socketCoin = new WebSocket(`${websocketURL}`)
        socketCoin.onmessage = (e) => {
            // extract required data
            // .
            // .
            candleSeries.updata({extractedData})
        }
    }
    return () => {
        // clear everything!
        socketCoin.close();
        setChartData(null);
        chart.remove();
    }
}, [chartData])


