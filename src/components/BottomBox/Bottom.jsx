import React, { useState } from 'react';
import { FaPlus } from "react-icons/fa6";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import GalleryImage from './GalleryImage';

const Bottom = () => {
    const [images, setImages] = useState([
        'https://s3-alpha-sig.figma.com/img/2dff/d2b7/1745c822191edd472339021e67b723d0?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D6H89TChaoFBeAlz1owe1RE3kzJ1~H0lf1CDbIGJgUxlr7znQ9nJO27KixQAYnEXlj1Xbxdd1R~UooNNkQavS5UjOyv0bClwaI5NvxIDARYiWu65rNhrufzA0QWjCPFAjqlHwFg8RYa~H5iOfxKXUSfumpvHaHu11oZKdVSdC-i63-4hevhtH2g52ggP40e6vImXrrAZCxD0~xqW18TY5pAgPOYElQxqv6wLa96VdgkAD63wENhVMXxh4Dhyp5BSe62HgKji~RwpxvdjZ41CxiKl5Mtpq1m3aPSGFmAnUmy8b3Qq1Tt-ANw00-9VBhT0GDOLNCqZL9vUnotAuX1dDw__',
        'https://s3-alpha-sig.figma.com/img/2dff/d2b7/1745c822191edd472339021e67b723d0?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D6H89TChaoFBeAlz1owe1RE3kzJ1~H0lf1CDbIGJgUxlr7znQ9nJO27KixQAYnEXlj1Xbxdd1R~UooNNkQavS5UjOyv0bClwaI5NvxIDARYiWu65rNhrufzA0QWjCPFAjqlHwFg8RYa~H5iOfxKXUSfumpvHaHu11oZKdVSdC-i63-4hevhtH2g52ggP40e6vImXrrAZCxD0~xqW18TY5pAgPOYElQxqv6wLa96VdgkAD63wENhVMXxh4Dhyp5BSe62HgKji~RwpxvdjZ41CxiKl5Mtpq1m3aPSGFmAnUmy8b3Qq1Tt-ANw00-9VBhT0GDOLNCqZL9vUnotAuX1dDw__',
        'https://s3-alpha-sig.figma.com/img/2dff/d2b7/1745c822191edd472339021e67b723d0?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D6H89TChaoFBeAlz1owe1RE3kzJ1~H0lf1CDbIGJgUxlr7znQ9nJO27KixQAYnEXlj1Xbxdd1R~UooNNkQavS5UjOyv0bClwaI5NvxIDARYiWu65rNhrufzA0QWjCPFAjqlHwFg8RYa~H5iOfxKXUSfumpvHaHu11oZKdVSdC-i63-4hevhtH2g52ggP40e6vImXrrAZCxD0~xqW18TY5pAgPOYElQxqv6wLa96VdgkAD63wENhVMXxh4Dhyp5BSe62HgKji~RwpxvdjZ41CxiKl5Mtpq1m3aPSGFmAnUmy8b3Qq1Tt-ANw00-9VBhT0GDOLNCqZL9vUnotAuX1dDw__',
    ]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleAddImage = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImages(prevImages => [...prevImages, reader.result]);
            };
            reader.readAsDataURL(file);
        }
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? images.length - 3 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 3 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className='flex flex-col w-full my-[20px] mr-[37px]'>
            <div className='top w-full flex justify-between items-center'>
                <div className='h-[62px] w-[149px] bg-[#171717] rounded-[20px] text-white font-normal text-[22px] flex items-center justify-center'>
                    Gallery
                </div>

                <div className='flex mr-[26px]'>
                    <input
                        type='file'
                        accept='image/*'
                        id='image-upload'
                        style={{ display: 'none' }}
                        onChange={handleAddImage}
                    />
                    <button
                        onClick={() => document.getElementById('image-upload').click()}
                        className='image-button px-[20px] py-[15px] bg-[#303439] rounded-[104px] text-white text-[15px] flex items-center justify-center gap-1 font-semibold'
                    >
                        <FaPlus />
                        ADD IMAGE
                    </button>

                    <div className='flex gap-[18px] ml-[28px]'>
                        <svg width="0" height="0" className='absolute'>
                            <defs>
                                <linearGradient id="dark-grey-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                                    <stop offset="0%" stopColor="#303439" />
                                    <stop offset="100%" stopColor="#161718" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <div className='flex gap-[18px] items-center'>
                            <div className='bg-[#6F787C] h-[30px] rounded-full flex justify-center items-center'>
                                <BsFillArrowLeftCircleFill 
                                    onClick={handlePrev}
                                    className='arrow-button rounded-[45px]' 
                                    color='#161718' 
                                    style={{ fill: "url(#dark-grey-gradient)" }} 
                                    size={45} 
                                />
                            </div>
                            <div className='bg-[#6F787C] h-[20px] rounded-full flex justify-center items-center'>
                                <BsFillArrowRightCircleFill 
                                    onClick={handleNext}
                                    className='arrow-button rounded-[45px]' 
                                    color='#161718' 
                                    style={{ fill: "url(#dark-grey-gradient)" }} 
                                    size={45} 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bottom-images flex gap-[21px] mt-[45px] mr-[20px]'>
                {images.slice(currentIndex, currentIndex + 3).map((image, index) => (
                    <GalleryImage key={index} src={image} />
                ))}
            </div>
        </div>
    );
};

export default Bottom;