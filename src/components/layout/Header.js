import React from 'react';
import './Header.scss';
import Logo from '../widgets/Logo';
import SearchBar from '../widgets/SearchBar';



class Header extends React.Component {

    render() {
        return (
            <div className="header">
                <Logo logoPath="img/logo.png" />
                <SearchBar/>
                <div>Item 3</div>
            </div>
        )
        }
}

export default Header;
