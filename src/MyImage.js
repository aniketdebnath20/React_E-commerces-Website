import React, { useState, useEffect } from 'react';

const MyImage = ({ imgs = [{ url: "", filename: "default" }] }) => {
    // Set the initial MainImage from the first image of imgs
    const [MainImage, setMainImage] = useState(imgs[0]);

    // Update the MainImage state when imgs prop changes
    useEffect(() => {
        if (imgs && imgs.length > 0) {
            setMainImage(imgs[0]); // Set the first image as the main image
        }
    }, [imgs]);  // Depend on imgs so it updates when imgs changes

    

    return (
        <div className='image-section'>
            {/* Side Images */}
            <div className='side-image'>
                {imgs.map((curElm, index) => {
                    return (
                        <figure key={curElm.filename || index} className="side-image-item">
                            <img 
                                src={curElm.url} 
                                alt={curElm.filename || "Image"} 
                                className='image'
                                onClick={() => setMainImage(curElm)} 
                            />
                        </figure>
                    )
                })}
            </div>

            {/* Main Image */}
            <div className="main-image">
                <img src={MainImage.url} alt={MainImage.filename || "Main Image"} />
            </div>
        </div>
    );
};

export default MyImage;
