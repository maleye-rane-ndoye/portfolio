import { socialMedia } from '@/data'
import React from 'react'
import { FaLocationArrow } from 'react-icons/fa'
import MagicButton from './ui/MagicButton'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='w-full pb-10 mb-[100px] md:mb-5' id='contact'>
        
        <div className='flex flex-col items-center'>
            <h1 className='heading lg:max-w-[45vw]'>
                Ready to take <span className='text-purple'>your</span> digital presence to the next level ?
            </h1>
            <p className='text-white-200 md:mt-10 my-5 text-centr'>
                Reach out to me today and let&apos;s discuss how i can help you achieve your goals.
            </p>
            <a href="mailto:maleyeranendoye@gmail.com">
                <MagicButton
                    title="Lest's get in touch"
                    icon={<FaLocationArrow/>}
                    position="right"
                />
            </a>
        </div>
        <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
            <p className='md:text-base text-sm md:font-normal font-light'>
                Copyright © 2024 Maleye rane
            </p>
            <div className='flex items-cneter md:gap-3 gap-6'>
                {socialMedia.map((profile) => (
                    <div key={profile.id} className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 hover:bg-black-300 hover:shadow-2xl hover:shadow-white-200 rounded-lg border border-black-300">
                        <Image src={profile.img} alt='profile' width={20} height={20} />

                    </div>
                ))}

            </div>
        </div>
    </footer>
  )
}

export default Footer
