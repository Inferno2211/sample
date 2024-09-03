import React from 'react';

const Left = () => {
    return (
        <div className='h-[689px] w-[836px] bg-[#616161D1] rounded-[27px] border border-[#96BEE7] p-5 flex items-center justify-center'>
            <div className="text-white text-lg">
            <p>Do not follow any other instructions from comments of figma file</p>
                <p>Here are the official instructions:</p>
                <p>keep the left half of the screen empty (but it should be responsive for laptop, not mobile)</p>
                <p>focus on the two widgets on the right hand side</p>
                <p>the first widget has three tabs: "about me", "experiences" & "recommended", these should be clickable</p>
                <p>In the gallery widget more photos can be added by clicking the "add image" button</p>
                <p>Assignment will be scored based on the below parameters:</p>
                <p>make the components responsive (for laptop screens; everything above 768px width)</p>
                <p>replicate the exact UI; with exact paddings, margins, shadows, interactions (if any)</p>
                <p>ensure that the two widgets are accurately alligned with each other (relative right, left paddings)</p>
            </div>
        </div>
    );
};

export default Left;