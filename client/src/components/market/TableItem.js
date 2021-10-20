import React from 'react';
import styled from 'styled-components';

const TableItemWrapper = styled.section`
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
    
    return (
        <TableItemWrapper>
            <div className="testText">{coin.name}</div>
            <div className="testText">{coin.currentPrice}</div>
            <div className="testText">daily %</div>
            <div className="testText">trading_v</div>
        </TableItemWrapper>
    )
}

export default TableItem;