
import Icon from './ui/Icon'
import Calendly from './Calendly'
import Logo from '@/assets/icons/logo.png'

export default function Contact() {
    return (
        <section className='pt-44' id='bookNow'>
            <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                    <Calendly />
                </div>
                <div className="">
                    <h1 data-aos="fade-up" className='font-semibold lg:text-5xl text-2xl md:text-3xl'>BOOK INTRO CALL</h1>
                    <p data-aos="fade-up" className='font-light md:text-base text-sm mt-3'>WHAT DO YOU GET ON THIS FREE MEETING?</p>
                    <div className="mt-10 grid gap-6">
                        {
                            ContactInfo.map((_, idx) => (
                                <div data-aos="fade-up" data-aos-delay={String(100 * idx)}
                                    key={idx}
                                    className="flex items-start gap-4">
                                    <Icon icon={Logo} className='h-6 w-6 flex-shrink-0' />
                                    <p className='font-light text-sm max-w-md'>{_}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}


const ContactInfo = [
    'Question and answer',
    'Free consultation on how to optimised your current marketing solutions.',
    'Customised marketing suggestions',
    'Essential guidance on how to go from point A - B.',
    'A nice laugh together.'
]