import React from 'react';
import Gallery from '../Gallery';
import Overview from './Overview';
import './MainPanel.scss';

class MainPanel extends React.Component {

    render() {
        return (
            <div className="main-panel">
                <Gallery />
                <Overview />

            </div>
            
        )
        }
}

export default MainPanel;
