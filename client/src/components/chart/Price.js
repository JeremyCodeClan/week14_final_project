import React from 'react';
import styled from 'styled-components';
import Responsive from 'components/common/general/Responsive';

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

const Price = ({ openRef, closeRef, highRef, lowRef }) => {
    return (
        <PriceBlock>
            <ContentBlock>
                <div>Candle Chart</div>
                <ValueSection>
                    <div className="closeRef" ref={closeRef}>Loading...</div>
                    <div className="openRef" ref={openRef}>Loading...</div>
                </ValueSection>
                <CurrencyBlock>
                    <div className="highRef" ref={highRef}>Loading...</div>
                    <div className="lowRef" ref={lowRef}>Loading...</div>
                </CurrencyBlock>
            </ContentBlock>
        </PriceBlock>
    )
}

export default Price;