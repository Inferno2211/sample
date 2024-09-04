import React from 'react'
import { FaRegQuestionCircle } from "react-icons/fa";
import WindowIcon from './WindowIcon';

const RightBox = ({ children }) => {
    return (
        <div className='main-box bg-tertiary rounded-[19px] max-w-[720px]'>
            <div className='flex'>
                <div className='relative mx-[12px] flex flex-col '>

                    {/* SVG Definitions for Gradient */}
                    <svg width="0" height="0" className='absolute top-0 left-0'>
                        <defs>
                            <linearGradient id="grey-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                                <stop offset="0%" stopColor="#4A4E54" />
                                <stop offset="100%" stopColor="#A3ADBA" />
                            </linearGradient>
                        </defs>
                    </svg>

                    {/* Gradient Icon */}
                    <FaRegQuestionCircle
                        size={24}
                        className='mt-[20px] mx-auto' // Center horizontally
                        style={{ fill: "url(#grey-gradient)" }}
                    />

                    {/* Centered Icon in Remaining Space */}
                    <div className='flex-grow flex items-center justify-center'>
                        <WindowIcon />
                    </div>

                </div>
                {children}
            </div>
        </div>
    )
}

export default RightBox