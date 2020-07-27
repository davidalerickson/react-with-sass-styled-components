import React from 'react';
import styled from 'styled-components';
import Menu from '../widgets/Menu';
import LegalText from '../widgets/LegalText';

const SidebarWrapper = styled.div`
    background-color: var(--color-grey-dark-1);
    flex: 0 0 18%;
    /* //flex column display allows us to put nav at top and legal at bottom */
    display: flex;
    flex-direction: column; 
    justify-content: space-between;
`;



class Sidebar extends React.Component {

    render() {
        return (
            <SidebarWrapper>
                <Menu />
                <LegalText/>
            </SidebarWrapper>  
        )
        }
}

export default Sidebar;
