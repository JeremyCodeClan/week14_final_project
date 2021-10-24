import React from 'react';
import styled from 'styled-components';
// import Responsive from 'components/common/general/Responsive';

// const ChartTabBlock = styled(Responsive)`
//     margin-top: 2rem;
// `;

const AboutCoinWrapper = styled.article`
    /* space indicate purpose */
    border: 1px dashed red;
    background: var(--bright-white);

    width: 50%;
    height: 100%;

`;

const ContentBlock = styled.section`
    
    padding: 0.5rem;

    .big-value {
        font-size: var(--ft-heading);
        padding: 0 0.5rem;
    }
`;


const AboutCoin = () => {

    return (
        <AboutCoinWrapper>
            <ContentBlock>
                <div className="big-value">About Coin</div>
                <div className="big-value">Description</div>
                <div className="big-value">Link to Coin_site</div>
            </ContentBlock>
        </AboutCoinWrapper>
    )
};

export default AboutCoin;
