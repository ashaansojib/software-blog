"use client"
import Image from 'next/image';
import React from 'react';

const Hero = () => {
    return (
        <div className='py-16 grid grid-cols-5 gap-3 text-center'>
            <div className='col-span-3'>
                <Image width={600} height={450} src="https://iremove.tools/img/webp/iphone-6s-activatinon-lock.webp" />
            </div>
            <div className='col-span-2'>
                <div className='grid grid-cols-2 gap-2'>
                    <div>
                        <Image width={200} height={200} src="https://images.wondershare.com/drfone/article/2022/08/how-to-bypass-icloud-activation-lock-screen-on-ios-16-01.jpg" />
                    </div>
                    <h2 className='p-2 border'>grid 2</h2>
                    <h2 className='p-2 border'>grid 3</h2>
                    <h2 className='p-2 border'>grid 2</h2>
                </div>
            </div>
        </div>
    );
};

export default Hero;