import React, { useState } from 'react';
import { Transition } from '@headlessui/react';

const TabComponent = () => {
    const [selectedTab, setSelectedTab] = useState('about');

    const tabs = [
        { id: 'about', label: 'About Me' },
        { id: 'experience', label: 'Experiences' },
        { id: 'recommended', label: 'Recommended' },
    ];

    return (
        <div className="flex bg-[#171717] rounded-[23px] gap-[6px] p-[6px] transition-all duration-100 ease-in-out">
            {tabs.map(({ id, label }) => (
                <div
                    key={id}
                    onClick={() => setSelectedTab(id)}
                    className={`text-lg font-normal rounded-[16px] py-[16px] text-center w-full max-w-[195px] z-10 cursor-pointer transition-all duration-100 ease-in-out  
                        ${selectedTab === id ? 'selected-tab ' : 'not-selected hover:bg-gradient-to-r '}`}
                >
                    {label}
                </div>
            ))}
        </div>
    );
};

export default TabComponent;