import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Icon from './ui/Icon'

export default function Banner() {
    return (
        <section className='banner lg:min-h-screen md:min-h-[800px] min-h-[600px]'>
            <div className="flex flex-col text-center justify-center items-center md:gap-8 gap-8">
                <div className="item-center justify-center grid gap-4 md:gap-5">
                    <h1 className='lg:text-8xl text-2xl md:text-5xl font-medium text-center'>
                        All Inclusive Web3 <br />
                        Marketing Firm
                    </h1>
                    <p className='font-light md:text-base text-sm max-w-[90%] md:max-w-[70%] lg:max-w-full mx-auto'>
                        Lumina has helped over 45+ crypto companies raise over $100m million & acquire millions of users.
                    </p>
                </div>
                <Link href={''}
                    className='lg:py-5 lg:px-10 md:py-4 py-3 px-7 md:px-8  bg-primary flex items-center gap-2 rounded-lg'>
                    <span className='text-black font-semibold text-xs md:text-sm lg:text-base'>
                        Request a free proposal
                    </span>
                    <Icon className={'lg:h-7 lg:w-7 md:h-6 md:w-6 h-5 w-5'} icon={'/icons/chervon-angle-right.png'} />
                </Link>
            </div>
        </section>
    )
}
