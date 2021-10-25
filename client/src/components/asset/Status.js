import React, { useState } from 'react';
import styled from 'styled-components';
import Responsive from 'components/common/general/Responsive';

const StatusBlock = styled(Responsive)`
    margin-top: 1rem;
`;

const ContentBlock = styled.article`
    /* space indicate purpose */
    border: 1px dashed red;
    background: var(--lightest-plum);

    padding: 0.5rem;
`;

const ValueBlock = styled.section`
    width: 100%;
    height: 50%;

    display: flex;
    justify-content: space-between;
    align-item: center;
    .values {
        /* space indicate purpose */
        border: 1px dashed red;
        background: var(--lighter-plum);

        width: 50%;
        padding: 1rem;
    }
`;

const Status = ({ myAssets, coinProductIdArr, gbpRate }) => {

    let dailyTotal = 0;
    let openTotal = 0;

    if (coinProductIdArr !== []) {
        coinProductIdArr.forEach((one, i) => {
            if (myAssets[one].currentTotal !== null) {
                dailyTotal += parseFloat(myAssets[one].currentTotal);
                openTotal += parseFloat(myAssets[one].openTotal);
            }
        })
    }

    return (
        <StatusBlock>
            <ContentBlock>
                <ValueBlock>
                    <div className='values'>
                        <div>Total balance</div>
                        <div>£ {(dailyTotal * gbpRate).toFixed(4)}</div>
                    </div>
                    <div className='values'>
                        <div>Daily Profit</div>
                        <div>{((dailyTotal / openTotal - 1) * 100).toFixed(4)} %</div>            
                    </div>
                </ValueBlock>
            </ContentBlock>
        </StatusBlock>
    )
}

export default Status;