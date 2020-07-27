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
                <MenuItem iconPath="../../img/SVG/home.svg" menuText="Hotels"/>
                <MenuItem iconPath="../../img/SVG/aircraft-take-off.svg" menuText="Flight"/>
                <MenuItem iconPath="../../img/SVG/key.svg" menuText="Car Rental"/>
                <MenuItem iconPath="../../img/SVG/map.svg" menuText="Tours"/>
            </MenuWrapper>
            </>
    )
}

export default Menu
