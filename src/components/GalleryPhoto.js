import React from 'react';
import './GalleryPhoto.scss';

class GalleryPhoto extends React.Component {

    render() {
        return (
            <figure className="gallery__item">
                <img src={this.props.src} alt={this.props.alt} class="gallery__photo" />
            </figure>
        )
        }
}

export default GalleryPhoto;
