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
        <div className='min-h-screen flex flex-col bg-gray-50'>
            {/* Navbar - Sticky ensures it stays on top */}
            <nav className="sticky top-0 z-50">
                <Navbar />
            </nav>

            {/* Banner Section */}
            <header className="w-full">
                <Banner />
            </header>

            {/* Content Section */}
            <div className='flex-grow w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 mt-8 mb-16'>
                <div className='grid grid-cols-1 lg:grid-cols-12 gap-8'>

                    {/* Main Section - Outlet কন্টেন্ট এখানে থাকবে */}
                    <main className='lg:col-span-9 col-span-1'>
                        <div className="bg-white rounded-3xl p-1 md:p-4 shadow-sm min-h-[400px]">
                            {state === "loading" ? (
                                <div className="flex justify-center items-center h-64">
                                    <Loading />
                                </div>
                            ) : (
                                <Outlet />
                            )}
                        </div>
                    </main>

                    {/* Right Side Section - Sidebar */}
                    <aside className="lg:col-span-3 col-span-1">
                        <div className="lg:sticky lg:top-24 h-fit space-y-6">
                            {/* Headline with underline decoration */}
                            <div className="mb-4">
                                <h1 className='font-bold text-2xl text-gray-800 relative inline-block'>
                                    Login With
                                    <span className="absolute -bottom-1 left-0 w-1/2 h-1 bg-purple-500 rounded-full"></span>
                                </h1>
                            </div>

                            {/* Sidebar Content Card */}
                            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <RightSide />
                            </div>

                            {/* Extra space for mobile view safety */}
                            <div className="block lg:hidden h-10"></div>
                        </div>
                    </aside>

                </div>
            </div>

            {/* Footer Section */}
            <footer className="mt-auto">
                <Footer />
            </footer>
        </div>
    );
};

export default HomeLayout;