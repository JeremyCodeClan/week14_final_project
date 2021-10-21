import React from 'react';
import styled from 'styled-components';
import Responsive from 'components/common/Responsive';

const StatusBlock = styled(Responsive)`
    margin-top: 1rem;
`;

const ContentBlock = styled.article`
    /* space indicate purpose */
    border: 1px dashed red;
    background: var(--lightest-plum);

    height: 10rem;
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

const CurrencyBlock = styled.section`
    /* space indicate purpose */
    border: 1px dashed red;
    background: var(--lighter-plum);

    float: right;
    width: 50%;
    height: 50%;
    padding: 1rem;
`;

const Status = () => {

    return (
        <StatusBlock>
            <ContentBlock>
                <ValueBlock>
                    <div className='values'>
                        <div>Invested_v: ++(every invested coins * Initial_price) </div>
                        <div>Total_v: (Invested_v + Total_Profit) </div>
                    </div>
                    <div className='values'>
                        <div>Total_Profit: ++(every coin profits)</div>
                        <div>Profit %: (((Total_v / Invested_v) - 1) * 100)% </div>            
                    </div>
                </ValueBlock>
                <CurrencyBlock>
                    <div>Add More Currency</div>
                    <div>Currecy Selection</div>
                </CurrencyBlock>
            </ContentBlock>
        </StatusBlock>
    )
}

export default Status;