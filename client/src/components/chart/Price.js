import React from 'react';
import styled from 'styled-components';
import Responsive from 'components/common/Responsive';

const PriceBlock = styled(Responsive)`
    margin-top: 2rem;
`;

const ContentBlock = styled.article`
    /* space indicate purpose */
    border: 1px dashed red;
    background: var(--lightest-plum);

    display: flex;
    height: 6rem;
    padding: 0.5rem;
`;

const ValueSection = styled.section`
    /* space indicate purpose */
    border: 1px dashed red;
    background: var(--lighter-plum);

    display: flex;
    flex-direction: column;

    width: 50%;
    padding: 1rem;

    .big-value {
        font-size: var(--ft-xxl);
    }
    .small-group {
        display: flex;
        font-size: var(--ft-md);
        .small-value {
            margin-right: 1rem;
        }
    }
`;

const CurrencyBlock = styled.section`
    /* space indicate purpose */
    border: 1px dashed red;
    background: var(--lighter-plum);

    width: 50%;
    padding: 1rem;

    .big-value {
        font-size: var(--ft-xxl);
    }
    .small-group {
        display: flex;
        font-size: var(--ft-md);
        .small-value {
            margin-right: 1rem;
        }
    }
`;

const Price = () => {
    return (
        <PriceBlock>
            <ContentBlock>
                <ValueSection>
                    <div className="big-value">CurrentPrice (ticker)</div>
                    <div className="small-group">
                        <div className="small-value">Daily % (ticker)</div>
                        <div className="small-value">Daily ▲▼amount (ticker)</div>
                    </div>
                </ValueSection>
                <CurrencyBlock>
                    <div className="big-value">Current Currency 💸 (custom)</div>
                    <div className="small-group">
                        <div className="small-value">[Option Bar]</div>
                        <div className="small-value">[Add Currency]</div>
                    </div>
                </CurrencyBlock>
            </ContentBlock>
        </PriceBlock>
    )
}

export default Price;