"use client"

import React from 'react'

const ColorTemplate: React.FC = ({ border, bg }: any) => {
    const [isActive, setIsActive] = React.useState(false);

    const handleClick = () => {
        if(isActive) {
            setIsActive(false);
        } else {
            setIsActive(true);
        }
    };
    return (
        <button onClick={handleClick} className={`w-8 h-8 ${border} ${isActive ? 'border-2 p-[5px]' : 'border p-1'} bg-neutral-200 dark:bg-neutral-900 rounded-full cursor-pointer`}>
            <div className={`w-full h-full rounded-full ${bg}`}></div>
        </button>
    )
}

export default ColorTemplate