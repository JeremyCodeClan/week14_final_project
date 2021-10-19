import React from 'react';
import styled, { css } from 'styled-components';
import Responsive from 'components/common/Responsive';

const HeaderBlock = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1;
    background: var(--brightest-white);
`;

const NavBlock = styled(Responsive)`
    height: 4.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const LogoText = styled.div`
    font-size: var(--ft-heading);
    font-weight: bold;
    color: var(--lightest-navy);
`;

const NavItemBlock = styled.nav``;
const NavItems = styled.ul`
    display: flex;
    .nav-item {
        margin-left: 2rem;
        font-size: var(--ft-lg)
    }
`;

const Header = () => {

    return (
        <HeaderBlock>
            <NavBlock>
                <LogoText>CryptoApp</LogoText>
                <NavItemBlock>
                <NavItems>
                        <li className="nav-item">Market</li>
                        <li className="nav-item">My Asset</li>
                        <li className="nav-item">My Page</li>
                        <li className="nav-item">Sign-in</li>
                    </NavItems>
                </NavItemBlock>
            </NavBlock>
        </HeaderBlock>
    )
}

export default Header;