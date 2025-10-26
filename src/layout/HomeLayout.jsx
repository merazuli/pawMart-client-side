import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import LeftAside from '../Components/LeftAside';
import Footer from '../pages/Footer';
import RightSide from '../Components/RightSide';
import Banner from '../Components/Banner';


const HomeLayout = () => {
    return (
        <div className=''>
            <Navbar></Navbar>
            <Banner></Banner>
            <div className='grid grid-cols-12 w-11/12 mx-auto gap-5 mt-5'>
                {/* left side  */}
                <aside className="col-span-2 sticky top-0 h-fit">
                    <h1 className='font-bold text-xl'>Category</h1>
                    <LeftAside></LeftAside>
                </aside>
                {/* main Section  */}
                <main className='col-span-7'>
                    <Outlet></Outlet>
                </main>

                {/* right side */}
                <div className=" col-span-3 sticky top-0 h-fit">
                    <h1 className='font-bold text-xl'>Login With</h1>
                    <RightSide></RightSide>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;