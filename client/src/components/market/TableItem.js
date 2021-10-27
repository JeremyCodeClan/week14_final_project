import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { refineNum } from 'helpers/calculation/calculator';

const TableItemBlock = styled.article`
    height: 4rem;
`;

const TableItemLink = styled(Link)`
    border-top: 1px solid var(--lightestestest-navy);
    border-bottom: 1px solid grey;
    padding: 1rem 1rem;
    margin: 1rem auto;
    display: flex;
    justify-content: space-evenly;

    background: var(--brightest-white);
    .testText { color: var(--light-navy); }
    .image-name-block {
        display: flex;
        width: 40%;
    }
    .image-block {
        width: 50%;
        display: flex;
        justify-content: end;
        align-items: center;
        margin-right: 3rem;
    }
    .coinName-block {
        width: 50%;
        display: flex;
        justify-content: center;
    }
    .dailyPrice-block, .dailyPer-block, .dailyVol-block {
        width: 20%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .image-block {
        height: 50px;
    }
    .coin-img { height: 50px; }
    .coinName-block {
        display: flex;
        flex-direction: column;
    }
`;

const TableItem = ({ coin, gbpRate }) => {

    // prices
    let dailyPrice = refineNum(coin.value.currentPrice, gbpRate)
    const dailyVol = (coin.value.currentPrice * coin.value.dailyVolume / 1000000).toFixed(3);

    // percentages
    const dailyPercentage = (((coin.value.currentPrice / coin.value.openPrice) - 1) * 100).toFixed(2);
    const refinedDailyPer = Math.round(dailyPercentage * 100) / 100;
    
    return (
        <TableItemBlock >
            <TableItemLink to={`/chart/@${coin.value.name}`}>
                {coin.value !== null ? 
                <>
                    <div className="image-name-block">
                        <div className="image-block">
                            <img className="coin-img" src={`/images/${coin.code}.svg`} />
                        </div>
                        <div className="coinName-block">
                            <div className="testText">{coin.fullname}</div>
                            <div className="testText">{coin.code}</div>
                        </div>
                    </div>
                    
                    <div className="dailyPrice-block">
                        <div className="testText">{dailyPrice}</div>
                    </div>
                    <div className="dailyPer-block">
                        <div className="testText">{refinedDailyPer} %</div>
                    </div>
                    <div className="dailyVol-block">
                        <div className="testText">{dailyVol}</div>
                    </div>
                </>
                :
                <></>
                }
            </TableItemLink>
        </TableItemBlock>
    )
}

export default TableItem;