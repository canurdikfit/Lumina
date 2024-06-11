'use client'
import React from 'react';
import CountUp from 'react-countup';
import Image from 'next/image';
import Carousel from './Carousel';





export default function Partner() {
    const width = window.innerWidth
    const nummber = width < 992 ? 2 : 4



    return (
        <section className='flex justify-center'>

            <div className="pt-20 text-center flex flex-col items-center">
                <h4>
                    Partners in our ecosystem
                </h4>
                <Carousel />
                {/* <Swiper
                        spaceBetween={30}
                        loop={true}
                        centeredSlides={true}
                        speed={4000}
                        allowTouchMove={false}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        slidesPerView={"auto"}
                        modules={[Autoplay]}
                        className="mySwiper mt-20 max-w-5xl"
                    >
                        {
                            Logos.map((items, id) => (
                                <SwiperSlide key={id} className='w-auto max-w-44 flex items-center'>
                                    <Image
                                        src={items.logoImg}
                                        alt={items.alternnative}
                                        height={items.height}
                                        width={items.width}
                                    />
                                </SwiperSlide>
                            ))
                        }



                    </Swiper> */}

                <div className="lg:mb-32 lg:mt-20 md:mt-10 md:mb-24 mt-8 mb-16 grid grid-cols-2 md:grid-cols-2 lg:flex items-center gap-x-8 md:gap-x-12 lg:gap-16">
                    {
                        Achieve.map((items, idx) => (
                            <div
                                key={idx}
                                className='flex items-center lg:gap-16 gap-8 md:gap-14'>
                                {
                                    idx % nummber !== 0 ?
                                        <div
                                            className='h-32 w-[1.05px] bg-gradient-to-b from-primary/0 via-primary to-primary/0 from-25% via-55% to-85% ' /> : <div
                                            className='h-32 hidden w-[1.05px] bg-gradient-to-b from-primary/0 via-primary to-primary/0 from-25% via-55% to-85% ' />
                                }
                                <div className="text-left">
                                    <h3 className='font-medium lg:text-xl md:text-lg text-base'>
                                        <CountUp
                                            start={0}
                                            end={items.value}
                                            enableScrollSpy={true}
                                            scrollSpyDelay={1}
                                            scrollSpyOnce={true}
                                            duration={3}
                                            startOnMount={false}
                                        />
                                        {' '}{items.target}+</h3>
                                    <p className='font-light text-sm'>{items.campaign}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div >


        </section >
    )
}


const Achieve = [
    {
        value: 100,
        target: 'Million',
        campaign: 'Funding rasied',
    },
    {
        value: 6,
        target: 'Million',
        campaign: 'Followers',
    },
    {
        value: 500,
        target: 'Million',
        campaign: 'Volume',
    },
    {
        value: 45,
        campaign: 'Clients',
    }
]

const Logos = [
    {
        logoImg: '/images/partners/solana.png',
        alternnative: 'Solana',
        height: 32,
        width: 167
    },
    {
        logoImg: '/images/partners/bybit.png',
        alternnative: 'Bybit',
        height: 27, width: 82,
    },
    {
        logoImg: '/images/partners/gate.png',
        alternnative: 'Gate.io',
        height: 27, width: 119,
    },
    {
        logoImg: '/images/partners/helio.png',
        alternnative: 'Helio',
        height: 27, width: 75,
    },
    {
        logoImg: '/images/partners/hacken.png',
        alternnative: 'Hacken',
        height: 17, width: 149,
    },
    {
        logoImg: '/images/partners/magic.png',
        alternnative: 'Magic Eden',
        height: 35, width: 160,
    },
    {
        logoImg: '/images/partners/opensea.png',
        alternnative: 'OpenSea',
        height: 41, width: 158,
    },

]