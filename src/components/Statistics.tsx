

export default function Statistics() {
    return (
        <section className="p-0 bg-[url('/images/statistics.png')] bg-no-repeat bg-cover bg-left-top my-20">
            <div className="bg-gradient-to-r from-black via-black to-black/0 from-0% via-70% md:via-50% lg:via-30% to-90% py-28
             before:absolute relative z-10 before:w-full before:h-[80%] before:rounded-full before:bg-primary/5 before:top-0 before:-left-1/4 before:blur-3xl before:z-0">
                <div className='grid gap-6 relative z-30'>
                    <h2 className='lg:text-4xl text-base md:text-2xl font-normal leading-normal'>
                        Experience <br />
                        skyrocketing statistics <br />
                        at Lumina
                    </h2>
                    <p className='lg:text-lg md:text-base text-sm font-semibold opacity-55'>
                        We design, develop & execute everything from A-Z in <br className='hidden md:block' />
                        terms of bringing your product to market in the <br className='hidden md:block' />
                        most compelling way possible.
                    </p>
                </div>
            </div>
        </section>
    )
}
