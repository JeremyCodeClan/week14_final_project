import React from 'react';
import styled from 'styled-components';
import Responsive from 'components/common/general/Responsive';

const HomeBlock = styled(Responsive)`
    margin-top: 2rem;
`;

const JumbotronBlock = styled.article`
    /* space indicate purpose */
    border: 1px dashed red;
    background: var(--white);

    width: 100%;
    height: 350px;

    .jm_placeholder {
        font-size: var(--ft-lg-heading);
    }
`;

const DescriptionBlock = styled.article`
    /* space indicate purpose */
    border: 1px dashed red;

    margin-top: 2rem;
    height: 350px;
    .des_placeholder {
        font-size: var(--ft-lg-heading);
    }
`;

const Home = () => {

    return (
        <HomeBlock>
            <JumbotronBlock>
                <div className="jm_placeholder">Jumbotron Placeholder</div>
            </JumbotronBlock>
            <DescriptionBlock>
                <div className="des_placeholder">Description Placeholder</div>
            </DescriptionBlock>
        </HomeBlock>
    )
};

export default Home;