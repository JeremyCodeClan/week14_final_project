import React from 'react';
import styled from 'styled-components'
import HeaderContainer from 'containers/common/HeaderContainer';

const ContentBlock = styled.div`
    background-color: white;
    padding-top: 4.5rem;
`;

const Layout = ({ children }) => {
    return (
        <>
            <HeaderContainer />
            <ContentBlock>
                {children}
            </ContentBlock>
        </>
    )
};

export default Layout;