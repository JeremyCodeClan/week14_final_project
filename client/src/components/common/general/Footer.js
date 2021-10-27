import React from 'react';
import styled from 'styled-components';
import Responsive from 'components/common/general/Responsive';

const FooterBlock = styled.article`
    height: 4rem;
    width: 100vw;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 0;
    left: 0;
    background: var(--lightest-navy);
`;

const FooterResponsive = styled(Responsive)`
 
    .foot-section {
        display: flex;
        justify-content: center;
        align-items: center;
        .name-block {
            display: flex;
            align-items: center;
            font-size: var(--ft-md);
            color: white;
            .designed {
                margin-right: 0.5rem;
            }
            .creator-name {
                font-size: var(--ft-xl);
                color: var(--darker-orange);
                font-family: 'Sonsie One', cursive;
            }
        }
    }
`;

const Footer = () => {

    return (
        <FooterBlock>
            <FooterResponsive>
                <section className="foot-section">
                    <div className="name-block">
                        <div className="designed">Copyright @2021 | Designed With by</div>
                        <div className="creator-name"> Jeremy Yoo</div>
                    </div>
                </section>
            </FooterResponsive>
        </FooterBlock>
    )
}

export default Footer;