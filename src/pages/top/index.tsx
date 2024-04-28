import ColorTemplate from '@/components/color'
import React from 'react'

const TopContainer: React.FC = () => {
    return (
        <div className='w-1/2 border-2 border-neutral-200 dark:border-neutral-800 bg-transparent backdrop-blur rounded-md p-3 flex items-center justify-center gap-5 shadow-md'>
            <ColorTemplate border="border-neutral-100" bg="bg-neutral-100" />
            <ColorTemplate border="border-neutral-800" bg="bg-neutral-800" />
            <ColorTemplate border="border-green-500" bg="bg-green-500" />
            <ColorTemplate border="border-blue-500" bg="bg-blue-500" />
            <ColorTemplate border="border-red-500" bg="bg-red-500" />
            <ColorTemplate border="border-violet-500" bg="bg-violet-500" />
        </div>
    )
}

export default TopContainer