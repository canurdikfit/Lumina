'use client'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

export default function Carousel() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        centerMode: true,
        variableWidth: true,
        navigator: false,
        className: "slider variable-width",
    };
    return (
        <div className="slider-container lg:max-w-5xl max-w-xs md:max-w-2xl mx-auto mt-20 overflow-hidden">
            <Slider {...settings}>
                {
                    Logos.map((items, id) => (
                        <div key={id} className="flex items-center mx-5 h-10">
                            <div>
                                <Image
                                    src={items.logoImg}
                                    alt={items.alternnative}
                                    height={items.height}
                                    width={items.width}
                                />
                            </div>
                        </div>
                    ))
                }
            </Slider>
        </div>
    );
}


const Logos = [
    {
        logoImg: '/images/partners/solana.png',
        alternnative: 'Solana',
        height: 35,
        width: 167
    },
    {
        logoImg: '/images/partners/bybit.png',
        alternnative: 'Bybit',
        height: 35, width: 82,
    },
    {
        logoImg: '/images/partners/gate.png',
        alternnative: 'Gate.io',
        height: 35, width: 119,
    },
    {
        logoImg: '/images/partners/helio.png',
        alternnative: 'Helio',
        height: 35, width: 75,
    },
    {
        logoImg: '/images/partners/hacken.png',
        alternnative: 'Hacken',
        height: 35, width: 149,
    },
    {
        logoImg: '/images/partners/magic.png',
        alternnative: 'Magic Eden',
        height: 35, width: 160,
    },
    {
        logoImg: '/images/partners/opensea.png',
        alternnative: 'OpenSea',
        height: 35, width: 158,
    },

]