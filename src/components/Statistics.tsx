import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import fiveUP from './../assets/images/staticUp/five.png';
import fourUp from './../assets/images/staticUp/four.png';
import OneUp from './../assets/images/staticUp/one.png';
import SixUp from './../assets/images/staticUp/six.png';
import threeUp from './../assets/images/staticUp/three.png';
import TwoUp from './../assets/images/staticUp/two.png';
import twoDown from './../assets/images/staticDown/two.png';
import threeDown from './../assets/images/staticDown/three.png';
import sixDown from './../assets/images/staticDown/six.png';
import sevenDown from './../assets/images/staticDown/seven.png';
import oneDown from './../assets/images/staticDown/one.png';
import fourDown from './../assets/images/staticDown/four.png';
import fiveDown from './../assets/images/staticDown/five.png';
import eightDown from './../assets/images/staticDown/eight.png';
// bg-[url('/statistics.png')]




export default function Statistics() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        cssEase: "linear",
        centerMode: true,
        autoplaySpeed: 1000,
        variableWidth: true,
        navigator: false,
        className: "slider variable-width md:h-[180px] h-28 max-w-screen mt-0 overflow-hidden bg-red-500",
    };

    return (
        <section className="p-0 relative bg-no-repeat bg-cover bg-left-top my-20 ">
            <aside className="overflow-hidden absolute inset-0 flex right-0 md:top-20 gap-5 flex-col justify-end ">
                <Slider {...settings}
                    rtl={true}
                    speed={7000}>
                    {
                        ImageTop.map((items, id) => (
                            <div key={id} className="flex md:h-[180px] h-28 r items-center">
                                <div className="md:h-[180px] h-28 relative mx-3 w-auto rounded-lg overflow-hidden">
                                    <img
                                        src={items}
                                        alt={'Statistics'}
                                        className='h-full w-full object-contain object-left-top'
                                    />
                                </div>
                            </div>
                        ))
                    }
                </Slider>

                <Slider {...settings}
                    speed={8000}>
                    {
                        ImageBottom.map((items, id) => (
                            <div key={id} className="flex md:h-[180px] h-28 r items-center">
                                <div className="md:h-[180px] h-28 relative mx-3 w-auto rounded-lg overflow-hidden">
                                    <img
                                        src={items}
                                        alt={'Statistics'}
                                        className='h-full w-full object-contain object-left-top'
                                    />
                                </div>
                            </div>
                        ))
                    }
                </Slider>

            </aside>






            <div className="bg-gradient-to-r from-black via-black to-black/0 from-0% via-30% to-90% py-28
             before:absolute relative z-10 before:w-full before:h-[80%] before:rounded-full before:bg-primary/5 before:top-0 before:-left-1/4 before:blur-3xl before:z-0">
                <div className='grid gap-6 relative z-30'>
                    <h2 data-aos="fade-right"
                        data-aos-duration="500" className='lg:text-4xl text-base md:text-2xl font-normal leading-normal'>
                        Experience <br />
                        skyrocketing statistics <br />
                        at Lumina
                    </h2>
                    <p data-aos="fade-right"
                        data-aos-duration="500" data-aos-delay='100' className='lg:text-lg md:text-base text-sm font-semibold opacity-55'>
                        We design, develop & execute everything from A-Z in <br className='hidden md:block' />
                        terms of bringing your product to market in the <br className='hidden md:block' />
                        most compelling way possible.
                    </p>
                </div>
            </div>
        </section>
    )
}


const ImageTop = [
    OneUp,
    TwoUp,
    threeUp,
    fourUp,
    fiveUP,
    SixUp,]
const ImageBottom = [
    twoDown,
    threeDown,
    sixDown,
    sevenDown,
    oneDown,
    fourDown,
    fiveDown,
    eightDown,
]
