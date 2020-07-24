import React from 'react';
import './MainPanel.scss';

class MainPanel extends React.Component {

    render() {
        return (
            <div className="main-panel">
                {this.props.children}
            </div>
            
        )
        }
}

export default MainPanel;
