import React from 'react';
import GalleryPhoto from './GalleryPhoto';
import './Gallery.scss';
import photo01 from '../img/gallery-photo-1.jpg';
import photo02 from '../img/gallery-photo-2.jpg';
import photo03 from '../img/gallery-photo-3.jpg';

class Gallery extends React.Component {

    render() {
        return (
            <div className="gallery">
                        <GalleryPhoto src={photo01} alt="photo 1" />
                        <GalleryPhoto src={photo02} alt="photo 2" />
                        <GalleryPhoto src={photo03} alt="photo 3" />
            </div>
        )
        }
}

export default Gallery;
