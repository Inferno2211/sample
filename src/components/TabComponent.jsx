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
        <div className="">
            
        </div>
    );
};

export default TabComponent;
