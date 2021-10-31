import React from 'react';
import styled from 'styled-components';
import Responsive from 'components/common/general/Responsive';
import { coinObjects } from 'helpers/coinlist/coinData';

const PriceBlock = styled(Responsive)`
    margin-top: 2rem;
`;

const ContentBlock = styled.article`
    display: flex;
    height: 10rem;
    padding: 0.5rem;
`;

const LogoAndNameBock = styled.section`
    display: flex;
    width: 35%;
    padding: 1rem;
    .logo-section {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 2rem 0 1rem; 
        .coin-img {
            height: 100px;
        }
    }
    .name-section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        .name-code {
            font-size: var(--ft-lg-heading);
            color: var(--lightestest-navy);
        }
        .name-fullname {
            font-size: var(--ft-xxl);
            color: var(--lightestestest-navy);
        }

    }
    
`;

const OCHLPriceBlock = styled.section`
    width: 65%;
    padding: 1rem;
    display: flex;
    justify-content: end;
    align-items: center;
    .open-div, .close-div {
        margin-right: 2rem;
    }
    .open-div, .high-div {
        margin-bottom: 1rem;
    }
    .type-text {
        color: var(--lightestestest-navy);
        margin-bottom: 0.25rem;
    }
    .price-text {
        color: var(--lightestest-navy);
        font-size: var(--ft-xl);
    }
`;

const Price = ({ coinCode, openRef, closeRef, highRef, lowRef }) => {

    return (
        <PriceBlock>
            <ContentBlock>
                <LogoAndNameBock>
                    <div className="logo-section">
                        <img className="coin-img" src={`/images/${coinCode}.svg`} />
                    </div>
                    <div className="name-section">
                        <div className="name-code">{coinCode}</div>
                        <div className="name-fullname">{coinObjects[`${coinCode}`].fullName}</div>
                    </div>
                </LogoAndNameBock>
                <OCHLPriceBlock>
                    <section className="open-close-block">
                        <div className="open-div">
                            <div className="type-text">Open</div>
                            <div className="price-text" ref={openRef}>Loading...</div>
                        </div>
                        <div className="close-div">
                            <div className="type-text">Close</div>                
                            <div className="price-text" ref={closeRef}>Loading...</div>
                        </div>
                    </section>
                    <section className="high-low-block">
                        <div className="high-div">
                            <div className="type-text">High</div>
                            <div className="price-text" ref={highRef}>Loading...</div>
                        </div>
                        <div className="low-div">
                            <div className="type-text">Low</div>                
                            <div className="price-text" ref={lowRef}>Loading...</div>
                        </div>
                    </section>
                </OCHLPriceBlock>
            </ContentBlock>
        </PriceBlock>
    )
}

export default Price;