"use client"

import Image from 'next/image'
import { CustomButton, CustomFilter, SearchBar } from '.'


const Hero = () => {
    const handleScroll = () => {};
  return (
    <div className='hero'>
        <div className='flex-1 pt-36 padding-x'>
                <h1 className='hero__title'>Koh Samui, Island trip, book a ticket for speed boat Quick & Easily.</h1>
                <p className='hero__subtitle'>Speed up your aventure experince with our effortless online booking serivce </p>
                <div className='flex items-center'>
                    <CustomButton 
                        title="Island Trip"
                        containerStyles="bg-primary-blue rounded-full text-white mt-10"
                        handleClick={handleScroll}
                        btnType='button'
                    />
                </div>                  
        </div>
        <div className='hero__image-container'>
            <div className='hero__image'>
                <Image src="/hero.png" alt="speedboat bg"  fill className='object-contain'/>
            </div>
            <div className='hero__image-overlay'/>          
        </div>    
        
    </div>
  )
}

export default Hero