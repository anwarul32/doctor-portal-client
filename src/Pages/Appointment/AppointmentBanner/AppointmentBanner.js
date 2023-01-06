import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import React, { useState } from 'react';
import chair from '../../../assets/images/chair.png';

const AppointmentBanner = () => {
    const [ selectedDate, setSelectedDate ] = useState( new Date() );
    return (
        <header className='my-6'>
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} alt='char-images' className="lg:w-1/2 rounded-lg shadow-2xl" />
                    <div className='mr-6'>
                        <DayPicker 
                        mode='single'
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        ></DayPicker>
                        <p>You have selected date: {format(selectedDate,'PP')}</p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;