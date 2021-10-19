import React from 'react';
import styled from 'styled-components'
import HeaderContainer from 'containers/common/HeaderContainer';
import FooterContainer from 'containers/common/FooterContainer';

const ContentBlock = styled.div`
    background-color: var(--brightest-white);
    padding-top: 4.5rem;
`;

const Layout = ({ children }) => {
    return (
        <>
            <HeaderContainer />
                <ContentBlock>
                    {children}
                </ContentBlock>
            <FooterContainer />
        </>
    )
};

export default Layout;