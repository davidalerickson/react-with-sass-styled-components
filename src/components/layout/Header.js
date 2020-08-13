import React from 'react';
import styled from 'styled-components';
import Logo from '../widgets/Logo';
import SearchBar from '../widgets/SearchBar';

const HeaderWrapper = styled.div`
    font-size: 1.4rem;
    height: 7rem;
    background-color: #fff;
    border-bottom: var(--line);
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media only screen and (max-width: ${props => props.theme.bpSmallest}) { 
        /* //allow searchbar to wrap to next line if need be. Have also set search to order: 1 to put searchbar at end to allow this. */
    flex-wrap: wrap;
    align-content: space-around;
    height: 11rem;
    }
`;

class Header extends React.Component {

    render() {
        return (
            <HeaderWrapper>
                <Logo logoPath="img/logo.png" />
                <SearchBar/>
                <div>Item 3</div>
            </HeaderWrapper>
        )
        }
}

export default Header;
