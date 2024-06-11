'use client'
import React from 'react'
import CountUp from 'react-countup';
import Icon from './ui/Icon';

export default function Case() {
    return (
        <section className='caseStudy pt-24' id='caseStudy'>
            <div>
                <div className="text-center mb-20">
                    <h2 className='lg:text-6xl md:text-5xl text-4xl font-normal '>CASE STUDY</h2>
                    <p className='lg:text-xl md:text-base text-sm max-w-2xl mt-5 opacity-55'>No matter what, our principles remain the same. We don't work on you — we work with you.</p>
                </div>
                <div className="pb-12 ">
                    <div className="grid justify-center">
                        {
                            caseStudy.map((content, index) => {
                                return (
                                    <div>
                                        <div className={`max-w-2xl md:px-16 px-8 pt-10 pb-20 border-primary before:border-primary z-0 relative before:block before:absolute before:bg-cover before:bg-[url('/images/bodybg.png')] before:inset-y-0 before:-top-[1px] before:w-[50%] before:border-t
                                         ${index == 0 ? 'rounded-l-3xl before:rounded-l-3xl before:border-l before:border-b before:left-0 border-t'
                                                : index == 1 ? 'rounded-r-3xl before:right-0 before:border-r before:rounded-r-3xl before:border-b'
                                                    : index == 2 ? 'rounded-l-3xl before:rounded-l-3xl before:border-l before:border-b before:left-0'
                                                        : index == 3 ? 'rounded-r-3xl before:right-0 before:border-r before:rounded-r-3xl before:border-b'
                                                            : index == 4 ? 'rounded-l-3xl before:rounded-l-3xl before:border-l before:border-b before:left-0'
                                                                : index == 5 ? 'rounded-r-3xl before:right-0 before:border-r before:rounded-r-3xl  border-b'
                                                                    : null
                                            }`}>
                                            <div className="flex gap-6 items-center">
                                                <Icon className={'md:h-44 md:w-44 h-20 w-20'} icon={content.icon} />
                                                <div className="grid gap-1 md:gap-3">
                                                    <h4>{content.title}</h4>
                                                    <p className='font-light md:text-sm text-[11px]'>{content.description}</p>
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-3 mt-10">
                                                {
                                                    content.operation.map((items: { value: number; extention: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; opera: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined }, idx: any) => {
                                                        return (
                                                            <div>
                                                                <h1 className='lg:text-3xl md:text-2xl text-xl font-bold'>
                                                                    <CountUp
                                                                        start={0}
                                                                        end={items.value}
                                                                        enableScrollSpy={true}
                                                                        scrollSpyDelay={1}
                                                                        duration={3}
                                                                        startOnMount={false}
                                                                    />
                                                                    {items.extention}
                                                                </h1>
                                                                <p className='font-light text-xs opacity-55'>{items.opera}</p>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}


const caseStudy = [
    {
        icon: '/images/hackCoin.png',
        alternative: 'Hack Coin',
        title: 'School Hack Coin',
        description: 'An innovative platform enhanced by Artificial intelligence to decentralise global education.',
        operation: [
            {
                value: 1,
                extention: 'M+',
                opera: 'Daily volume'
            },
            {
                value: 3,
                extention: 'M+',
                opera: 'Users'
            },
            {
                value: 2.5,
                extention: 'M',
                opera: 'Token raise'
            },
        ]
    },
    {
        icon: '/images/basebet.png',
        alternative: 'Basebet',
        title: 'Basebet',
        description: 'My own project. A crypto casino with a lucrative web3 economy.',
        operation: [
            {
                value: 10,
                extention: 'M+',
                opera: 'On platform volume'
            },
            {
                value: 10,
                extention: 'K+',
                opera: 'New users'
            },
            {
                value: 10,
                extention: 'K',
                opera: 'NFT sell'
            },
        ]
    },
    {
        icon: '/images/zeebit.png',
        alternative: 'Zeebit',
        title: 'Zeebit',
        description: 'A decentralised Crypto Casino ',
        operation: [
            {
                value: 9,
                extention: 'M+',
                opera: 'VC Funding',
            },
            {
                value: 20,
                extention: 'K+',
                opera: 'Community members'
            },
            {
                value: 700,
                extention: 'K',
                opera: 'NFT Raise'
            },
        ]
    },
    {
        icon: '/images/helio.png',
        alternative: 'Helio',
        title: 'Helio',
        description: 'An all-in-one crypto payments solution.',
        operation: [
            {
                value: 3.3,
                extention: 'M',
                opera: 'VC Funding',
            },
            {
                value: 21,
                extention: 'M',
                opera: 'Secondary NFT sale'
            },
            {
                value: 100,
                extention: 'K',
                opera: 'New users'
            },
        ]
    },
    {
        icon: '/images/le7el.png',
        alternative: 'LE7EL',
        title: 'LE7EL',
        description: 'A web3 Gaming protocol.',
        operation: [
            {
                value: 100,
                extention: 'K+',
                opera: 'New users',
            },
            {
                value: 400,
                extention: '+',
                opera: 'Colaborations',
            },
            {
                value: 2,
                extention: 'M+',
                opera: 'Impressions',
            },
        ]
    },
    {
        icon: '/images/mintify.png',
        alternative: 'Mintify',
        title: 'Mintify',
        description: 'An NFT Trading platform.',
        operation: [
            {
                value: 200,
                extention: 'K+',
                opera: 'Followers',
            },
            {
                value: 30,
                extention: 'K+',
                opera: 'New users',
            },
            {
                value: 1.6,
                extention: 'M+',
                opera: 'VC funding',
            },
        ]
    },
]