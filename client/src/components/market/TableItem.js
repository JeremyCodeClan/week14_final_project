import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const TableItemLink = styled(Link)`
    /* space indicate purpose */
    border: 1px dashed red;
    background: var(--steel);

    padding: 1rem 1rem;
    margin: 1rem auto;
    display: flex;
    justify-content: space-evenly;

    .testText {
        color: white;
    }
`;

const TableItem = ({ coin, gbpRate }) => {

    // prices
    let dailyPrice;
    if (coin.currentPrice > 10000) dailyPrice = (coin.currentPrice * gbpRate).toFixed(2);
    if (coin.currentPrice < 10000 && coin.currentPrice > 1000) dailyPrice = (coin.currentPrice * gbpRate).toFixed(3);
    if (coin.currentPrice < 1000 && coin.currentPrice > 100) dailyPrice = (coin.currentPrice * gbpRate).toFixed(4);
    if (coin.currentPrice < 100 && coin.currentPrice > 10) dailyPrice = (coin.currentPrice * gbpRate).toFixed(5);
    if (coin.currentPrice < 10 && coin.currentPrice > 1) dailyPrice = (coin.currentPrice * gbpRate).toFixed(6);
    if (coin.currentPrice < 1 && coin.currentPrice > 0.1) dailyPrice = (coin.currentPrice * gbpRate).toFixed(6);
    if (coin.currentPrice < 0.1) dailyPrice = (coin.currentPrice * gbpRate).toFixed(6);
    const dailyVol = (coin.currentPrice * coin.dailyVolume / 1000000).toFixed(3);

    // percentages
    const dailyPercentage = (((coin.currentPrice / coin.openPrice) - 1) * 100).toFixed(2);
    const refinedDailyPer = Math.round(dailyPercentage * 100) / 100;
    
    return (
        <TableItemLink to={`/chart/@${coin.name}`}>
            {coin !== null ? 
            <>
                <div className="testText">{coin.name}</div>
                <div className="testText">{dailyPrice}</div>
                <div className="testText">{refinedDailyPer} %</div>
                <div className="testText">{dailyVol}</div>
            </>
            :
            <></>
            }
        </TableItemLink>
    )
}

export default TableItem;