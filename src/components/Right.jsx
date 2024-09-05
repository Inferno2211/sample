import React from 'react'
import Top from './TopBox/Top'
import Bottom from './BottomBox/Bottom'
import RightBox from './Common/RightBox'

const RightContainer = () => {
    return (
        <div className='flex flex-col gap-[19px] items-center justify-center ml-auto  mr-[80px]'>
            <RightBox>
                <Top />
            </RightBox>
            <div className='w-4/5 h-[4px] rounded-[2.46px] hl' />
            <RightBox>
                <Bottom />
            </RightBox>
            <div className='w-4/5 h-[4px] rounded-[2.46px] hl' />
        </div>
    )
}

export default RightContainer