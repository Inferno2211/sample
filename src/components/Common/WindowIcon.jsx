import React from 'react'

const WindowIcon = () => {
    return (
        <div className='flex flex-wrap gap-[1.38px] w-[20px]'>
            {[...Array(6)].map((_, index) => (
                <div
                    key={index}
                    className='w-[9.31px] h-[9.31px] bg-[#4A4E54] rounded-[2.16px]'
                />
            ))}
        </div>
    )
}

export default WindowIcon