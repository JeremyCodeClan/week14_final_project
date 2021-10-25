import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const TableItemBlock = styled.article`
    height: 4rem;
`;

const TableItemLink = styled(Link)`
    /* space indicate purpose */
    border: 1px dashed red;

    padding: 1rem 1rem;
    margin: 1rem auto;
    display: flex;
    justify-content: space-evenly;

    background: var(--brightest-white);

    .testText { color: var(--navy); }
    .coin-img { height: 40px; }
`;

const TableItem = ({ coin, gbpRate }) => {

    // prices
    let dailyPrice;
    if (coin.value.currentPrice > 10000) dailyPrice = (coin.value.currentPrice * gbpRate).toFixed(2);
    if (coin.value.currentPrice < 10000 && coin.value.currentPrice > 1000) dailyPrice = (coin.value.currentPrice * gbpRate).toFixed(3);
    if (coin.value.currentPrice < 1000 && coin.value.currentPrice > 100) dailyPrice = (coin.value.currentPrice * gbpRate).toFixed(4);
    if (coin.value.currentPrice < 100 && coin.value.currentPrice > 10) dailyPrice = (coin.value.currentPrice * gbpRate).toFixed(5);
    if (coin.value.currentPrice < 10 && coin.value.currentPrice > 1) dailyPrice = (coin.value.currentPrice * gbpRate).toFixed(6);
    if (coin.value.currentPrice < 1 && coin.value.currentPrice > 0.1) dailyPrice = (coin.value.currentPrice * gbpRate).toFixed(6);
    if (coin.value.currentPrice < 0.1) dailyPrice = (coin.value.currentPrice * gbpRate).toFixed(6);
    const dailyVol = (coin.value.currentPrice * coin.value.dailyVolume / 1000000).toFixed(3);

    // percentages
    const dailyPercentage = (((coin.value.currentPrice / coin.value.openPrice) - 1) * 100).toFixed(2);
    const refinedDailyPer = Math.round(dailyPercentage * 100) / 100;
    
    return (
        <TableItemBlock >
            <TableItemLink to={`/chart/@${coin.value.name}`}>
                {coin.value !== null ? 
                <>
                    <img className="coin-img" src={`/images/${coin.code}.svg`} />
                    <div className="testText">{coin.fullname}</div>
                    <div className="testText">{coin.code}</div>
                    <div className="testText">{dailyPrice}</div>
                    <div className="testText">{refinedDailyPer} %</div>
                    <div className="testText">{dailyVol}</div>
                </>
                :
                <></>
                }
            </TableItemLink>
        </TableItemBlock>
    )
}

export default TableItem;