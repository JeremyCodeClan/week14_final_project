import React from 'react';
import styled from 'styled-components';
import Responsive from 'components/common/general/Responsive';

const HomeBlock = styled(Responsive)`
    margin-top: 3rem;
    .wider {
        padding: 2rem;
        background: var(--darker-orange);
        border-radius: 1rem;
    }
`;

const JumbotronBlock = styled.section`
    background-image: url('/images/cryptoBackground.svg');
    background-repeat : no-repeat;
    background-size: 75% 100%;
    height: 100%;
    overflow: hidden;

    display: flex;
    justify-content: end;

    padding: 1rem;

    width: 100%;
    height: 400px;

    .text-block {
        display: flex;
        flex-direction: column;
        justify-content: end;
    }
    .jm-text {
        font-size: var(--ft-md-heading);
        text-shadow: red 2px 5px;
        text-align: end;
        font-family: 'Sonsie One', cursive;
        color: white;
    }
`;

const DescriptionBlock = styled.article`
    margin-top: 2rem;
    height: 200px;
    padding: 2rem;
`;

const Home = () => {

    return (
        <HomeBlock>
            <article className="wider">
                <JumbotronBlock>
                    <div className="text-block">
                        <div className="jm-text">The</div>
                        <div className="jm-text">Best</div>
                        <div className="jm-text">Crypto</div>
                        <div className="jm-text">Viewer</div>
                    </div>
                </JumbotronBlock>
            </article>
        </HomeBlock>
    )
};

export default Home;