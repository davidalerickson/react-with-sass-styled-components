import React from 'react';
import './Header.scss';
import SearchBar from '../widgets/SearchBar';



class Header extends React.Component {

    render() {
        return (
            <div className="header">
                <div>Item 1</div>
                <SearchBar/>
                <div>Item 3</div>
            </div>
        )
        }
}

export default Header;
