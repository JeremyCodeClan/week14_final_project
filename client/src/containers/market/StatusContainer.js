import React from 'react';
import { useSelector } from 'react-redux';
import Status from 'components/market/Status'

const StatusContainer = () => {
    // const { 
    //     gbpRate
    // } = useSelector(({ tickers, currencyGbp }) => ({
    //     gbpRate: currencyGbp.rate,
    // }))

    return (
        <>
            <Status />
        </>        

    )
}

export default StatusContainer;