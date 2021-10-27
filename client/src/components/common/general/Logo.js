import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LogoText = styled.header`
    font-size: var(--ft-lg-heading);
    color: var(--darkest-orange);
    :hover {
        color: var(--darker-orange);
    }
`

const Logo = () => {
    return (
        <>
            <LogoText className="logo-font"><Link to='/'>mcv</Link></LogoText>
        </>
    )
}



export default Logo;