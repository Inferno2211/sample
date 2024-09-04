import React from 'react'
import Left from '../components/left'
import RightContainer from '../components/Right'

const Home = () => {
    return (
        <div className='h-screen w-full bg-gradient-to-b from-primary to-secondary'>
            <div className='pt-[96px] pl-[29px] flex gap-[57px]'>
                <Left />
                <RightContainer />
            </div>
        </div>
    )
}

export default Home