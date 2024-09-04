import React from 'react';

const GalleryImage = ({ src }) => {
    return (
        <div className='relative w-[190px] h-[180px]'>
            <img
                src={src}
                alt='Example'
                className='w-full h-full object-cover grayscale rounded-[24px]'
            />
        </div>
    );
};

export default GalleryImage;