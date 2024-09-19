import React from 'react'
import MagicButton from './ui/MagicButton'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/textGenerateEffect'
import { FaLocationArrow } from "react-icons/fa";
import Image from 'next/image';



const Hero = () => {
  return (
    <div className='pb-20 pt-36'>
          <div className='relative'>
                <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white'/>
                <Spotlight className='-top-10 -left-full h-[80vh] w-[50vh]' fill='purple'/>
                <Spotlight className='-top-28 -left-80 h-[80vh] w-[50vh] ' fill='blue'/>
          </div>
          <div className="h-full w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.05] bg-grid-black/[0.2] flex items-center justify-center relative overflow-hidden">
            <img
               src="/b11.jpeg" 
               alt='b11' 
               className='object-cover w-full h-full mask-image-[linear-gradient(to_top, transparent, black, transparent)]'
               width={1920}  
               height={1080}  />

  
              <div className='absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col text-center items-center justify-center'>
                <h2 className='uppercase tracking-widest text-xs md:text-xl text-center text-blue-100 '>
                Transforming the Web with a Blend of Modern <p className='text-purple font-bold'>Tech Stacks</p> 
                </h2>

                <TextGenerateEffect
                  className='sm:text-sm'
                  words='Crafting Innovative Solutions for Modern Web Experiences'
                />
                <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl whitespace-nowrap '>
                  Hi I&apos;m Maleye, a Full Stack Developer based in France
                </p>
                <a href="#about">
                  <MagicButton
                    title='show my work'
                    icon={<FaLocationArrow />}
                    position='right'
                  />
                </a>
              </div>
          </div>

    </div>
  )
}

export default Hero

