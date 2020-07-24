import React from 'react';
import './Content.scss';

class Content extends React.Component {

    render() {
        return (
            <nav className="content">
                {this.props.children}
            </nav>
        )
        }
}

export default Content;
