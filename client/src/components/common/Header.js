import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
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
    /* space indicate purpose */
    border: 1px dashed red;
    background: var(--lightest-teal);


    font-size: var(--ft-heading);
    color: var(--lightest-navy);
    font-weight: bold;
`;

const NavItemBlock = styled.nav``;
const NavItems = styled.ul`
    /* space indicate purpose */
    border: 1px dashed red;
    background: var(--lightest-teal);

    padding: 0;
    display: flex;
    color: var(--lightest-navy);
    .nav-item {
        margin-left: 2rem;
        font-size: var(--ft-lg)
    }
`;

const Header = () => {

    return (
        <HeaderBlock>
            <NavBlock>
                <LogoText><Link to='/'>CryptoApp</Link></LogoText>
                <NavItemBlock>
                <NavItems>
                    <li className="nav-item"><Link to='/market'>Market</Link></li>
                    <li className="nav-item"><Link to='/asset'>My Asset</Link></li>
                    <li className="nav-item"><Link to='/personal'>My Page</Link></li>
                    <li className="nav-item"><Link to='/'>Sign-in</Link></li>
                </NavItems>
                </NavItemBlock>
            </NavBlock>
        </HeaderBlock>
    )
}

export default Header;