import React from 'react';
import styled from 'styled-components';

const LogoWrapper = styled.img`
    height: 3.25rem;
    margin-left: 2rem;
`;

const Logo = ({ logoPath }) => {
    return (
        <LogoWrapper src={logoPath} />
    )
}

export default Logo
