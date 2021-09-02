import React, {useState} from 'react';
import {cumulativeOffSet} from "../../utilities/cumulativeOffset"
import './ProductSlider.scss';

const ProductSlider = (
    {
        image
    }
) => {
    const imageRef = React.createRef();
    const [img, setImg] = useState(image[0]);
    const [aItem, setAItem] = useState(0);


    const handleImageChange = (e) => {
        const currentX = e.clientX - cumulativeOffSet(imageRef.current).left;

        console.dir(imageRef.current);

        const part = imageRef.current.clientWidth / image.length;
        console.log(Math.ceil(currentX / part) - 1);

        let imgIndex = Math.ceil(currentX / part) - 1;
        if (imgIndex < 0) {
            imgIndex = 0;
        }

        if (imgIndex >= image.length) {
            imgIndex = image.length - 1;
        }
        setAItem(imgIndex);
        setImg(image[imgIndex]);
    };

    const handleMouseOut = (e) => {
        setImg(image[0]);
        setAItem(0);
    };

    const changeImage = (i) => {
        setImg(image[i]);
        setAItem(i);
    }


    return (
        <aside className="col-sm-5 border-right">
            <article className="gallery-wrap">
                <div className="img-big-wrap">
                    <div style={{padding: '2rem'}}><a href="#"><img
                        ref={imageRef}
                        onMouseMove={handleImageChange}
                        onMouseOut={handleMouseOut}
                        src={img}
                        style={{width: '100%',
                                height: '100%'}}
                    /></a></div>
                </div>
                <div className="img-small-wrap">
                    {image.map((img , i ) => (
                        <div className="item-gallery" onClick={() => {changeImage(i)}}><img src={img}/></div>
                    ))}
                </div>
            </article>
        </aside>
    );
};

export default ProductSlider;