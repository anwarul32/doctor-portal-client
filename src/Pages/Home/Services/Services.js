import React from 'react';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import Service from './Service';
import ServiceBanner from './ServiceBanner';




const Services = () => {

    const servicesData = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            description: 'Fluoride is a natural mineral that builds strong teeth and prevents cavities. It’s been an essential oral health treatment for decades.',
            img: fluoride
        },
        {
            id: 2,
            name: 'Cavity Filling',
            description: "You should expect to be at your dentist's office for around an hour. This gives him or her enough time to take x-rays if needed, talk to you about the procedure and complete the dental work.",
            img: cavity
        },
        {
            id: 3,
            name: 'Teeth Whitening',
            description: "Teeth whitening involves bleaching your teeth to make them lighter. It can't make your teeth brilliant white, but it can lighten the existing colour by several shades.",
            img: whitening
        },
    ]

    return (
        <div className='mt-16'>
            <div className='text-center'>
                <h3 className='text-xl font-bold text-primary uppercase'>Our services</h3>
                <h2 className='text-3xl my-2'>Services we Provide</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    servicesData.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
            <div className='my-8'>
              <ServiceBanner></ServiceBanner>
            </div>
        </div>
    );
};

export default Services; 