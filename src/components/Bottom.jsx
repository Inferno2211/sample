import React from 'react'
import { FaPlus } from "react-icons/fa6";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs"
import GalleryImage from './GalleryImage';

const Bottom = () => {
    return (
        <div className='flex flex-col w-full my-[20px] mr-[37px]'>
            <div className='top w-full flex justify-between items-center '>
                <div className='h-[62px] w-[149px] bg-[#171717] rounded-[20px] text-white text-[22px] flex items-center justify-center'>
                    Gallery
                </div>

                <div className='flex mr-[26px]'>
                    <div className='h-[46px] w-[131px] bg-white rounded-[104px] text-black text-[15px] flex items-center justify-center gap-1'>
                        <FaPlus />
                        Add Image
                    </div>

                    <div className='flex gap-[18px] ml-[28px]'>
                        {/* SVG Definitions for Gradient */}
                        <svg width="0" height="0" className='absolute'>
                            <defs>
                                <linearGradient id="grey-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                                    <stop offset="0%" stopColor="#303439" />
                                    <stop offset="100%" stopColor="#161718" />
                                </linearGradient>
                            </defs>
                        </svg>

                        <BsFillArrowLeftCircleFill color='#161718' size={45} />
                        <BsFillArrowRightCircleFill color='#161718' size={45} />
                    </div>
                </div>
            </div>

            <div className='bottom-images flex gap-[21px] mt-[45px] mr-[20px]'>
                <GalleryImage />
                <GalleryImage />
                <GalleryImage />
            </div>
        </div>
    )
}

export default Bottom