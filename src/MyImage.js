import React, { useState } from 'react'

const MyImage = ({ imgs = [{ url: "" }] }) => {

    const [MainImage, setMainImage] = useState(imgs[0]);

    return (

        <>
            <div className='image-section'>

                <div className='side-image'>
                    {imgs.map((curElm, index) => {
                        return (
                            <figure>
                                <img src={curElm.url}
                                    alt={curElm.filename}
                                    key={index}
                                    className='image'
                                    onClick={() => setMainImage(curElm)}
                                />
                            </figure>
                        )

                    })}
                </div>

                <div className="main-image">
                    <img src={MainImage.url} alt={MainImage.filename} />
                </div>
            </div>
        </>

    )

}

export default MyImage
