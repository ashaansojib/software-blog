import React from 'react';

const Hero = () => {
    return (
        <div className='py-2 grid grid-cols-5 gap-3 text-center'>
            <h2 className='p-2 border col-span-3'>grid 1</h2>
            <div className='col-span-2'>
                <div className='grid grid-cols-2 gap-2'>
                    <h2 className='p-2 border'>grid 3</h2>
                    <h2 className='p-2 border'>grid 2</h2>
                    <h2 className='p-2 border'>grid 3</h2>
                    <h2 className='p-2 border'>grid 2</h2>
                </div>
            </div>
        </div>
    );
};

export default Hero;