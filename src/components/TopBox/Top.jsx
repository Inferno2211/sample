import React from 'react'
import TabComponent from './TabComponent'

const Top = () => {
    return (
        <div className='flex items-center'>
            <div className='flex flex-col my-[20px] w-full mr-[40px] gap-[35px]'>
                <TabComponent />

                <p className='text-white font-normal tracking-[0.08em]'>
                    Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.
                    <br />
                    <br />
                    I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...
                </p>
            </div>
            <div>
                <div className='side w-[8px] h-[64px] bg-gradient-to-b from-[#888989] to-[#4A4E54] rounded-[8px] mr-[13px]' />
            </div>
        </div>
    )
}

export default Top