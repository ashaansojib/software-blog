"use client";
import { Avatar, Switch } from '@mui/material';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    const label = { inputProps: { 'aria-label': 'Switch demo' } };
    return (
        <div className='px-2 py-4 border-b border-slate-100'>
            <div className='flex justify-between gap-6 items-center'>
                <Link href="/"><h2 className='text-2xl font-semibold'>Software Blog</h2></Link>
                <div className='flex gap-4 justify-between items-center'>
                    <input className='p-2 w-full inline-block border border-slate-200 rounded-lg' type="text" name="" id="" placeholder='Search Your Software' />
                    <Switch {...label} defaultChecked />
                    <Avatar alt="Remy Sharp" src="/favicon.ico" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;