import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';


const AuthLayout = () => {
    return (
        <div>
            <header><Navbar></Navbar></header>
            <main className=''>
                <Outlet></Outlet>
            </main>

        </div>
    );
};

export default AuthLayout;