import React from 'react'
import {FlipWords} from './FlipWords'

const HeroText = () => {
  return (
    <div className='relative z-10 w-full'>
        {/*Desktop view - Left aligned */}
        <div className='flex-col hidden md:flex items-start justify-start mt-20 md:mt-40 ml-4 md:ml-8 lg:ml-16'>
            <div className='flex justify-start'>
                <img src='src/assets/BLRemoved.png'
                 className='w-auto h-60 object-contain' 
                />
            </div>
            <div className='mt-4'>
                <FlipWords 
                words={["Play Beyond", "Limits"]}
                className="font-black text-white text-6xl block text-left whitespace-nowrap"
                />
            </div>
        </div>
        {/*Mobile view - Centered */}
        <div className='flex flex-col space-y-6 md:hidden items-center mt-20 px-4'>
            <div className='flex justify-center'>
                <img src='src/assets/BLRemoved.png'
                 className='w-auto h-40 object-contain' 
                />
            </div>
            <div className='relative w-full flex justify-center'>
                <div className='absolute left-1/2 transform -translate-x-1/2'>
                    <FlipWords 
                    words={["Play Beyond", "Limits"]}
                    className="font-black text-white text-3xl block text-center whitespace-nowrap"
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroText