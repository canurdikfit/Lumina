import React from 'react'
import Icon from './ui/Icon'
import Link from 'next/link'

export default function Footer() {
    return (
        <section className='lg:pt-28 md:pt-20 pt-14 pb-16 mt-44 grid justify-center text-center bg-black'>
            <div className="flex lg:gap-12 md:gap-7 gap-4 items-center mb-16 justify-center">
                <Link href={''}>
                    <Icon className={'lg:h-8 md:h-7 h-6 lg:w-8 md:w-7 w-6'} icon={'/icons/linkedinblock.png'} />
                </Link>
                <Link href={''}>
                    <Icon className={'lg:h-8 md:h-7 h-6 lg:w-8 md:w-7 w-6'} icon={'/icons/twitterblock.png'} />
                </Link>
                <Link href={''}>
                    <Icon className={'lg:h-8 md:h-7 h-6 lg:w-8 md:w-7 w-6'} icon={'/icons/instagram.png'} />
                </Link>
                <Link href={''}>
                    <Icon className={'lg:h-8 md:h-7 h-6 lg:w-8 md:w-7 w-6'} icon={'/icons/discord.png'} />
                </Link>
            </div>
            <div className="flex items-center gap-4 md:gap-7 lg:gap-14 mb-7">
                <Link href={''}>
                    <span className='text-[10px] md:text-sm lg:text-base'>
                        Privacy policy
                    </span>
                </Link>
                <Link href={''}>
                    <span className='text-[10px] md:text-sm lg:text-base'>
                        Term of service
                    </span>
                </Link>
                <Link href={''}>
                    <span className='text-[10px] md:text-sm lg:text-base'>
                        Language
                    </span>
                </Link>
            </div>
            <p className='text-[10px] md:text-sm lg:text-base'>© 2024 LUMINA</p>
        </section>
    )
}
