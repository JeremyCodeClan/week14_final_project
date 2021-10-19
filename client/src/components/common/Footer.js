import React from 'react';
import styled from 'styled-components';
import Responsive from 'components/common/Responsive';

const FooterBlock = styled(Responsive)`
    margin-top: 3rem;
`;

const ContentBlock = styled.article`
    /* space indicate purpose */
    border: 1px dashed red;
    background: var(--lightest-teal);

    height: 6rem;

    .foot_placeholder {
        font-size: var(--ft-lg-heading);
    }
`;

const Footer = () => {

    return (
        <FooterBlock>
            <ContentBlock>
                <div className="foot_placeholder">Footer Placeholder</div>
            </ContentBlock>
        </FooterBlock>
    )
}

export default Footer;