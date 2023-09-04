"use client";
import { Avatar, Button, Switch } from '@mui/material';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    const label = { inputProps: { 'aria-label': 'Switch demo' } };
    return (
        <nav className='px-2 py-4 border-b border-slate-100'>
            <div className='grid items-center justify-between grid-cols-3'>
                <Link href="/"><h2 className='text-2xl font-semibold'>Software Blog</h2></Link>
                <div className='col-span-2 flex justify-end items-center gap-4'>
                    <div className='flex gap-3 items-center'>
                        <input className='p-2 border inline-block border-slate-200 rounded-lg' type="text" name="" id="" placeholder='Search Your Software' />
                        <Link href="/tools"><Button variant="text">Tools</Button></Link>
                        <Link href="/"><Button variant="text">Help Center</Button></Link>
                        <Switch {...label} defaultChecked />
                    </div>
                    <Avatar alt="Remy Sharp" src="/favicon.ico" />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;