import React from 'react';
import styled from 'styled-components';
import Responsive from 'components/common/general/Responsive';
import AboutContainer from 'containers/chart/AboutContainer';
import InvestInfoContainer from 'containers/chart/InvestInfoContainer';

const AboutAndInvestBlock = styled(Responsive)`
    margin-top: 3rem;
`;

const ContentBlock = styled.article`
    /* space indicate purpose */
    border: 1px dashed red;
    background: var(--white);

    display: flex;
    justify-content: center;
    height: 15rem;
    padding: 0.5rem;
`;

const AboutAndInvest = () => {

    return (
        <AboutAndInvestBlock>
            <ContentBlock>
                <AboutContainer />
                <InvestInfoContainer />
            </ContentBlock>
        </AboutAndInvestBlock>
    )
};

export default AboutAndInvest;
