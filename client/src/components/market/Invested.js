import React from 'react';
import styled from 'styled-components';
import Responsive from 'components/common/Responsive';

const InvestedBlock = styled(Responsive)`
    margin-top: 2rem;
`;

const ContentBlock = styled.article`
    /* space indicate purpose */
    border: 1px dashed red;
    background: var(--lightest-plum);
    height: 10rem;
`;

const ValueBlock = styled.section`
    width: 90%;
    display: flex;
    margin: 1rem auto;
    justify-content: space-between;
    align-item: center;
    .values {
        padding: 1rem 5rem;
        border: 1px dashed red;
        background: var(--lighter-plum);
    }
`;

const CurrencyBlock = styled.section`
    float: right;
    width: 30%;
    height: 4rem;
    padding: 1rem;
    border: 1px dashed red;
    background: var(--lighter-plum);
`;

const Invested = () => {

    return (
        <InvestedBlock>
            <ContentBlock>
                <ValueBlock>
                    <div className='values'>
                        <div>Invested Value</div>
                        <div>Total Value</div>
                    </div>
                    <div className='values'>
                        <div>Total Profit</div>
                        <div>Profit Percentage</div>            
                    </div>
                </ValueBlock>
                <CurrencyBlock>
                    <div>Add More Currency</div>
                    <div>Currecy Selection</div>
                </CurrencyBlock>
            </ContentBlock>
        </InvestedBlock>
    )
}

export default Invested;