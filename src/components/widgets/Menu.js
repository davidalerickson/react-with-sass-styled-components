import React from 'react';
import styled from 'styled-components';
import MenuItem from './MenuItem';

const MenuWrapper = styled.ul`
    font-size: 1.4rem;
    list-style: none;
    margin-top: 3.5rem;
 
    @media only screen and (max-width: ${props => props.theme.bpMedium}) {
       display: flex;
       margin: 0;
    }
`



const Menu = () => {
    return (<>
            <MenuWrapper>
                <MenuItem menuText="Hotels"/>
                <MenuItem menuText="Flight"/>
                <MenuItem menuText="Car Rental"/>
                <MenuItem menuText="Tours"/>
            </MenuWrapper>
            </>
    )
}

export default Menu
