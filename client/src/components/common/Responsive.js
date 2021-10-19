import React from 'react';
import styled from 'styled-components';

const ResponsiveBlock = styled.div`
    width: 85%;
    margin: 0 auto;
    @media (max-width: 1376px) {
        width: 85%;
    }
    @media (max-width: 1024px) {
        width: 90%;
    }
    @media (max-width: 768px) {
        width: 95%;
    }
    @media (max-width: 584px) {
        width: 100%;
    }
`

const Responsive = ({ children, ...rest }) => {
    return <ResponsiveBlock {...rest}>{children}</ResponsiveBlock>
}

export default Responsive;