
import { Suspense } from 'react'

export default function Youtube() {
    return (
        <section className='flex justify-center lg:pb-52 md:pb-32 pb-20'>
            <div className="flex flex-col items-center lg:gap-14 md:gap-10 gap-7">
                <h4 className='max-w-2xl'>
                    Lumina has helped over 45+ crypto companies raise
                    over $100m million & acquire millions of users.
                </h4>
                <Suspense fallback={<IframeLoadingState />}>
                    <iframe
                        className='max-w-6xl md:h-[450px] h-64 w-full'
                        src="https://www.youtube.com/embed/Ue4G12_m5eI?si=raTGTzfOJEzMPNTc"
                        title="Lumina"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen></iframe>
                </Suspense>
                <a href={'https://www.youtube.com'}
                    className='lg:py-5 lg:px-10 md:py-4 py-3 px-7 md:px-8  bg-primary flex items-center gap-2 rounded-lg'>
                    <span className='text-black font-semibold'>
                        Go to youtube
                    </span>
                </a>
            </div>
        </section>
    )
}

const IframeLoadingState = () => {
    return (
        <div className="max-w-[560px] max-h-[315px] h-full w-full bg-stone-800 animate-pulse flex items-center justify-center">
            <p className='text-lg font-normal '>Loading Video</p>
        </div>
    )
}