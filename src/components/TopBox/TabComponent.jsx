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
        <div className="flex bg-[#171717] rounded-[23px] gap-[6px] p-[6px] w-full">
            {tabs.map(({ id, label }) => (
                <div
                    key={id}
                    onClick={() => setSelectedTab(id)}
                    className={`text-lg font-normal rounded-[16px] py-[16px] text-center w-full max-w-[195px] hover:bg-gradient-to-r hover:from-[#171717] hover:to-secondary ${selectedTab === id ? 'selected-tab ' : 'not-selected'}`}
                >
                    {label}
                </div>
            ))}
        </div>
    );
};

export default TabComponent;
