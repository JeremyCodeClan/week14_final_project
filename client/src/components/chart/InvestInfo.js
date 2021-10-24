import React from 'react';
import styled from 'styled-components';
// import Responsive from 'components/common/general/Responsive';

// const ChartTabBlock = styled(Responsive)`
//     margin-top: 2rem;
// `;

const InvestInfoWrapper = styled.article`
    /* space indicate purpose */
    border: 1px dashed red;
    background: var(--bright-white);
    
    width: 50%;
    height: 100%;
`;

const ContentBlock = styled.section`
    
    padding: 0.5rem;

    .big-value {
        font-size: var(--ft-xxl);
        padding: 0 0.5rem;
    }
`;


const InvestInfo = () => {

    return (
        <InvestInfoWrapper>
            <ContentBlock>
                <div className="big-value">Invested Amount</div>
                <div className="big-value">Total Value & Profit %</div>
                <div className="big-value">Link to Buy More</div>
                <div className="big-value">(Need to be logged in)</div>
            </ContentBlock>
        </InvestInfoWrapper>
    )
};

export default InvestInfo;
