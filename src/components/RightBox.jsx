import React from 'react'

const RightBox = ({ children }) => {
    return (
        <div className='bg-tertiary w-[720px] h-[316px] rounded-[19px]'>
            <div className='flex'>
                <div className='frame mx-[12px]'>

                </div>
                {children}
            </div>
        </div>
    )
}

export default RightBox