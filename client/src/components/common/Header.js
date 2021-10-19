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
    font-size: var(--ft-xxl);
    font-weight: bold;
    color: var(--lightest-navy);
`;

const NavItemBlock = styled.nav``;
const NavItemItems = styled.ul`
    display: flex;
    .nav-item {
        margin-left: 2rem;
    }
`;

const Header = () => {

    return (
        <HeaderBlock>
            <NavBlock>
                <LogoText>CryptoApp</LogoText>
                <NavItemBlock>
                    <NavItemItems>
                        <li className="nav-item">Market</li>
                        <li className="nav-item">Asset</li>
                        <li className="nav-item">Personal</li>
                    </NavItemItems>
                </NavItemBlock>
            </NavBlock>
        </HeaderBlock>
    )
}

export default Header;