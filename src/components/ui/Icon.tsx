import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import React from 'react'

export default function Icon(props: { className: string | undefined; icon: string | StaticImport }) {
    return (
        <div className={`${props.className} relative`}>
            <Image
                sizes='100%'
                className='object-contain'
                fill={true}
                src={props.icon}
                alt='icon'
            /></div>
    )
}
