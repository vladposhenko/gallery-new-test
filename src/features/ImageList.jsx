import React, {useEffect} from 'react';
import Image from "./Image";
import './imagelist.css'


const ImageList = ({ images }) => {
    if(!images) return <div>Loading...</div>
    return (
        <section>
            <h1>Unsplash Gallery for QuantNetwork</h1>
            <div className="image-list">
                {images.map(image => <Image image={image}/>)}
            </div>
        </section>
    );
};

export default ImageList;