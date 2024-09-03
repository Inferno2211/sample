import React from 'react'
import Top from './Top'
import Bottom from './Bottom'
import RightBox from './RightBox'

const RightContainer = () => {
    return (
        <div className='flex flex-col gap-[41px]'>
            <RightBox>
                <Top />
            </RightBox>

            <RightBox>
                <Bottom />
            </RightBox>
        </div>
    )
}

export default RightContainer