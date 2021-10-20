import React from 'react';
import styled from 'styled-components'
import HeaderContainer from 'containers/common/HeaderContainer';
import FooterContainer from 'containers/common/FooterContainer';
import { withRouter, useLocation } from 'react-router-dom';

const ContentBlock = styled.div`
    background-color: var(--brightest-white);
    padding-top: 4.5rem;
`;

const Layout = ({ children }) => {
    const location = useLocation();

    return (
        <>
            <HeaderContainer />
                <ContentBlock>
                    {children}
                </ContentBlock>
            {location.pathname === '/' ? (<FooterContainer />) : (<></>)}
            
        </>
    )
};

export default withRouter(Layout);