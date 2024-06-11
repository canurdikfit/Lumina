'use client'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image"
import Link from "next/link"
import Icon from "./ui/Icon"
import { useEffect, useState } from "react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const screen = window

    const handleScroll = () => {
        const offset = window.scrollY;

        if (offset > 200) {
            setScrolled(true);
        }
        else {
            setScrolled(false);
        }
    }
    useEffect(() => {
        screen.addEventListener('scroll', handleScroll)
    })

    return (
        <header className={scrolled ? 'inset-x-0 fixed top-0 bg-black z-50 py-6 translate-y-0 transition-all ease-linear duration-500' : 'inset-x-0 absolute py-10'}>
            <nav className="flex items-center justify-between lg:px-16 md:px-10 px-6 bg-transparent">
                <Link href={'/'}>
                    <Icon icon={'/images/logo.png'} className='h-5 md:h-7  lg:w-44 w-24' />
                </Link>
                <Sheet>
                    <SheetTrigger asChild>
                        <div>

                            <Image src={'/icons/tab.png'}
                                width={30}
                                height={30}
                                alt={'chevron'} />
                        </div>
                    </SheetTrigger>
                    <SheetContent className="bg-white text-black pt-28 text-left">
                        <SheetHeader className="text-left">
                            <SheetTitle className="text-primary font-medium md:text-sm text-xs">Menu</SheetTitle>
                            <SheetDescription className="pt-5 grid gap-4">
                                <Link href={'https://www.google.com'}>
                                    <p className="md:text-xl text-base">Home</p>
                                </Link>
                                <Link href={'https://www.google.com'}>
                                    <p className="md:text-xl text-base">Service</p>
                                </Link>
                                <Link href={'#caseStudy'}>
                                    <p className="md:text-xl text-base">Case study</p>
                                </Link>
                                <Link href={'#bookNow'}>
                                    <p className="md:text-xl text-base">Book us now</p>
                                </Link>
                            </SheetDescription>
                        </SheetHeader>

                        <div className="pt-28">
                            <SheetTitle className="text-primary font-medium md:text-sm text-xs">Socials</SheetTitle>
                            <SheetDescription className="pt-10 grid gap-5">
                                <Link href={'https://www.google.com'} className="flex gap-3 items-center">
                                    <Icon icon={'/icons/twitterblack.png'} className="h-5 md:h-6 w-5 md:w-6" />
                                    <p className="text-sm md:text-base font-semibold">Twitter</p>
                                </Link>
                                <Link href={'https://www.google.com'} className="flex gap-3 items-center">
                                    <Icon icon={'/icons/discordblack.png'} className="h-5 md:h-6 w-5 md:w-6" />
                                    <p className="text-sm md:text-base font-semibold">Discord</p>
                                </Link>
                                <Link href={'https://www.google.com'} className="flex gap-3 items-center">
                                    <Icon icon={'/icons/telegram.png'} className="h-5 md:h-6 w-5 md:w-6" />
                                    <p className="text-sm md:text-base font-semibold">Telegram</p>
                                </Link>
                            </SheetDescription>
                        </div>

                    </SheetContent>
                </Sheet>
            </nav>
        </header>
    )
}