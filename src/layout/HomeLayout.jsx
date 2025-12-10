import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../pages/Footer';
import RightSide from '../Components/RightSide';
import Banner from '../Components/Banner';
import Loading from '../Loading';


const HomeLayout = () => {
    const { state } = useNavigation();


    return (
        <div className=''>
            <Navbar></Navbar>
            <Banner></Banner>
            <div className='grid grid-cols-12 w-11/12 mx-auto gap-5 mt-5'>
                {/* main Section  */}
                <main className='lg:col-span-9 col-span-12 max-w-7xl mx-auto mb-10'>
                    {state == "loading" ? < Loading /> : <Outlet></Outlet>}
                </main>

                {/* right side */}
                <div className=" lg:col-span-3 lg:sticky top-0 h-fit col-span-12">
                    <h1 className='font-bold text-xl'>Login With</h1>
                    <RightSide></RightSide>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;