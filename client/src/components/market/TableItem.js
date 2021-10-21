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

const TableItem = ({ coin }) => {

    const dailyP = ((coin.currentPrice / coin.openPrice) - 1) * 100;
    const refinedDailyP = Math.round(dailyP * 100) / 100
    
    return (
        // <Link to='/'>
        <TableItemLink to={`/chart/@${coin.name}`}>
            {coin !== null ? 
            <>
                <div className="testText">{coin.name}</div>
                <div className="testText">{coin.currentPrice}</div>
                <div className="testText">{refinedDailyP} %</div>
                <div className="testText">{coin.dailyVolume}</div>
            </>
            :
            <></>
            }
        </TableItemLink>
        // </Link>
    )
}

export default TableItem;