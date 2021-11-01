import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import Responsive from 'components/common/general/Responsive';

const HeaderBlock = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 10;
    background: var(--brightest-white);
`;

const NavBlock = styled(Responsive)`
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const NavItemBlock = styled.nav``;
const NavItems = styled.ul`
    padding: 0;
    display: flex;
    color: var(--lightestest-navy);
    .nav-item {
        margin-left: 2rem;
        font-size: var(--ft-xl);
        cursor: pointer;
        :hover {
            color: var(--light-navy);
        }
    }
`;

const Header = ({ userId, signinFnc, signoutFnc }) => {

    return (
        <HeaderBlock>
            <NavBlock>
                <Logo />
                <NavItemBlock>
                <NavItems>
                    <li className="nav-item"><Link to='/market'>Market</Link></li>
                    { userId === null ?
                        (
                            <li className="nav-item" onClick={signinFnc}>Sign in</li>
                        ):(
                        <>
                            <li className="nav-item"><Link to='/asset'>Assets</Link></li>
                            <li className="nav-item" onClick={signoutFnc}>Sign out</li>
                        </>
                        )
                    }
                </NavItems>
                </NavItemBlock>
            </NavBlock>
        </HeaderBlock>
    )
}

export default Header;