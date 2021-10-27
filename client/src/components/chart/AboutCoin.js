import React from 'react';
import styled from 'styled-components';
import Responsive from 'components/common/general/Responsive';
import { loremIpsum } from 'react-lorem-ipsum';
import { coinObjects } from 'helpers/coinlist/coinData';

const AboutCoinBlock = styled(Responsive)`
    margin-top: 4rem;
    padding-bottom: 1.5rem;
`;

const AboutCoinWrapper = styled.article`
    width: 100%;
    height: 100%;
`;

const ContentBlock = styled.section`
    padding: 2rem 3rem;
    background: var(--lightest-orange);
    border-radius: 0.75rem;

    .about-header, .des-header {
            margin-bottom: 0.5rem;
            color: var(--lightestest-navy);
            font-size: var(--ft-sm-heading);
    }
    .about-block {
        .about-text {
            color: var(--lightest-navy);
            padding: 0.25rem 0.5rem;

            .about-coinName {
                color: var(--darkest-orange);
                font-size: var(--ft-xl);
            }
            .about-lorem {
                text-transform: lowercase;
            }
            .des-lorem {
                margin-top: 0.5rem;
            }
        }
    }
`;


const AboutCoin = ({ coinCode }) => {

    return (
        <AboutCoinBlock>
            <AboutCoinWrapper>
                <ContentBlock>
                    <section className="about-block">
                        <div className="about-header">About</div>
                        <div className="about-text">
                            <span className="about-coinName">{coinObjects[`${coinCode}`].fullName}</span>
                            <span> is </span>
                            {loremIpsum({}).map(text => (
                                <span className="about-lorem" key={text}>
                                    {text}
                                </span>
                            ))}
                            {loremIpsum({ p: 1 }).map(text => (
                            <div className="des-lorem" key={text}>
                                {text}
                            </div>
                            ))}
                        </div>
                    </section>
                </ContentBlock>
            </AboutCoinWrapper>
        </AboutCoinBlock>
    )
};

export default AboutCoin;
