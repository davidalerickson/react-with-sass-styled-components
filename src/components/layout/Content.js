import React from 'react';
import styled from 'styled-components';

const NavWrapper = styled.nav`
    display: flex;
    height: 120rem;
    /* //switches sidebar to topbar */
    @media only screen and (max-width: ${props => props.theme.bpMedium}) {
        flex-direction: column; 
        height: auto;
    }
`;

class Content extends React.Component {

    render() {
        return (
            <NavWrapper>
                {this.props.children}
            </NavWrapper>
        )
        }
}

export default Content;
