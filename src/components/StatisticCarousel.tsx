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


export default function StatisticCarousel() {
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
        className: "slider variable-width md:h-[180px] h-32 max-w-screen mt-0 overflow-hidden",
    };

    return (
        <>
            <Slider {...settings}
                rtl={true}
                speed={7000}>
                {
                    ImageTop.map((items, id) => (
                        <div key={id} className="flex md:h-[180px] h-32 r items-center">
                            <div className="md:h-[180px] h-32 relative mx-3 w-auto rounded-lg overflow-hidden">
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
                        <div key={id} className="flex md:h-[180px] h-32 r items-center">
                            <div className="md:h-[180px] h-32 relative mx-3 w-auto rounded-lg overflow-hidden">
                                <img
                                    src={items}
                                    alt={'Statistics'}
                                    className='h-full w-full object-contain object-left-top'
                                />
                            </div>
                        </div>
                    ))
                }
            </Slider></>
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