import React from 'react';
import Sidebar from './Sidebar';
import MainPanel from './MainPanel';
import './Content.scss';

class Content extends React.Component {

    render() {
        return (
            <nav className="content">
                <Sidebar />
                <MainPanel />
            </nav>
        )
        }
}

export default Content;
