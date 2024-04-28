import Image from 'next/image'
import React from 'react'

const PhotoContainer: React.FC = () => {
    return (
        <div className='w-1/2 border-2 border-neutral-200 dark:border-neutral-800 rounded-2xl p-4'>
            <Image src="https://source.unsplash.com/random/?india" alt="photo" width={500} height={500} className='w-full aspect-auto rounded-xl object-cover object-center' />
        </div>
    )
}

export default PhotoContainer