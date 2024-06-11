import React from 'react'
import Personal from './Personal'

export default function Team() {
    return (
        <section className='lg:pt-36 pt-20'>
            <div>
                <div className="flex flex-wrap md:flex-nowrap items-center justify-between mb-10 lg:gap-12 gap-5  max-w-5xl mx-auto">
                    <h1 className='lg:text-6xl md:text-4xl text-3xl font-normal'>
                        MEET THE <br />
                        TEAM
                    </h1>
                    <p className='font-light lg:text-xl text-base opacity-55 max-w-sm'>
                        Meet the team at lumina. we are specialiy
                        qualified with the right experience in bringing out the teams success </p>
                </div>
                <div className="lg:flex grid md:grid-cols-2 flex-wrap justify-center items-center gap-9">
                    {
                        TeamMembers.map((items, idx) => {
                            return (
                                <Personal
                                    key={idx}
                                    image={items.image}
                                    position={items.position}
                                    title={items.title}
                                    linkedin={items.linkedin}
                                    twitter={items.twitter} />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}


const TeamMembers = [
    {
        image: '/images/founder.png',
        title: 'Rhys Mckay',
        position: 'Founder',
        twitter: 'https://www.google.com',
        linkedin: 'https://www.google.com',
    },
    {
        image: '/images/development.png',
        title: 'Cullen Iwata',
        position: 'Business development',
        twitter: 'https://www.google.com',
        linkedin: 'https://www.google.com',
    },
    {
        image: '/images/marketing.png',
        title: 'John Rodriguez',
        position: 'Operation / Marketing',
        twitter: 'https://www.google.com',
        linkedin: 'https://www.google.com',
    },
    {
        image: '/images/collaboration.png',
        title: 'Moh1shh',
        position: 'Head of collaborations',
        twitter: 'https://www.google.com',
        linkedin: 'https://www.google.com',
    },
    {
        image: '/images/community.png',
        title: 'PUNK',
        position: ' Community specialist',
        twitter: 'https://www.google.com',
        linkedin: 'https://www.google.com',
    },
]