import React from 'react'
import { FaRegQuestionCircle } from "react-icons/fa";

const RightBox = ({ children }) => {
    return (
        <div className='bg-tertiary rounded-[19px]'>
            <div className='flex'>
                <div className='relative mx-[12px]'>

                    {/* SVG Definitions for Gradient */}
                    <svg width="0" height="0" className='absolute'>
                        <defs>
                            <linearGradient id="grey-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                                <stop offset="0%" stopColor="#4A4E54" />
                                <stop offset="100%" stopColor="#A3ADBA" />
                            </linearGradient>
                        </defs>
                    </svg>

                    <FaRegQuestionCircle
                        size={24}
                        className='mt-[20px]'
                        style={{ fill: "url(#grey-gradient)" }}
                    />
                </div>
                {children}
            </div>
        </div>
    )
}

export default RightBox