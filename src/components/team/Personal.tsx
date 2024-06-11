import React from 'react'
import Icon from '../ui/Icon'
import Link from 'next/link'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import { UrlObject } from 'url'
import Image from 'next/image'

export default function Personal(props: { image: string | StaticImport; position: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; title: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; linkedin: string | UrlObject; twitter: string | UrlObject }) {
    return (
        <div className='w-auto max-w-[352] grid justify-center p-4 bg-[#0E0E0E] text-center gap-3'>
            <div className='w-full h-80 min-w-[320px] max-w-[400px] relative'>
                <Image
                    sizes='100%'
                    className='object-cover'
                    fill={true}
                    src={props.image}
                    alt='https://www.google.com'
                /></div>
            <h3 className='font-medium md:text-lg text-base'>{props.position}</h3>
            <p className='md:text-sm font-light text-xs'>{props.title}</p>
            <div className="flex items-center justify-center gap-5">
                <Link href={props.linkedin}>
                    <Icon className={'h-7 w-7'} icon={'/icons/linkedin.png'} />
                </Link>
                <Link href={props.twitter}>
                    <Icon className={'h-7 w-7'} icon={'/icons/twitter.png'} />
                </Link>

            </div>
        </div>
    )
}
