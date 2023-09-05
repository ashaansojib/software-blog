"use client"
import React from 'react';
import Hero from './home/Hero';
import Aside from './sidebar/page';
import Featured from './home/Featured';

const HomePage = () => {
    return (
        <div>
            <Hero />
            {/* main container area */}
            <div className='grid grid-cols-3 justify-between gap-2'>
                <div className='col-span-2 border p-2'>
                    <Featured />
                    <h2>Content area</h2>
                </div>
                <Aside />
            </div>
        </div>
    );
};

export default HomePage;