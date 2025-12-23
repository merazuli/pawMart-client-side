import React, { useState } from 'react';
import { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';
import userIcon from "../assets/user.png"

const Navbar = () => {
    const { user, setUser, logOutUser } = useContext(AuthContext);
    const [isChecked, setIsChecked] = useState(true);

    const handleThemeChange = () => {
        setIsChecked(!isChecked);
        const html = document.querySelector("html");
        if (isChecked) {
            html.setAttribute("data-theme", "dark");
        } else {
            html.setAttribute("data-theme", "light");
        }
    };

    const handleLogout = () => {
        logOutUser()
            .then(() => {
                toast.success("Successfully Logged Out!");
                setUser(null);
            })
            .catch(error => {
                toast.error(`Logout Failed: ${error.code}`);
            });
    };

    // NavLink এর জন্য একটি কমন স্টাইল ফাংশন (Active link হাইলাইট করার জন্য)
    const navLinks = (
        <>
            <li><NavLink to="/" className={({ isActive }) => isActive ? "text-purple-600 font-bold underline decoration-2 underline-offset-4" : "font-semibold hover:text-purple-500"}>Home</NavLink></li>
            <li><NavLink to="/" className={({ isActive }) => isActive ? "text-purple-600 font-bold underline decoration-2 underline-offset-4" : "font-semibold hover:text-purple-500"}>Pets & Supplies</NavLink></li>
            {user && (
                <>
                    <li><NavLink to="/profile" className={({ isActive }) => isActive ? "text-purple-600 font-bold" : "font-semibold"}>Profile</NavLink></li>
                    <li><NavLink to="/add-services" className={({ isActive }) => isActive ? "text-purple-600 font-bold" : "font-semibold"}>Add Service</NavLink></li>
                    <li><NavLink to="/my-services" className={({ isActive }) => isActive ? "text-purple-600 font-bold" : "font-semibold"}>My Service</NavLink></li>
                    <li><NavLink to="/my-orders" className={({ isActive }) => isActive ? "text-purple-600 font-bold" : "font-semibold"}>My Orders</NavLink></li>
                </>
            )}
        </>
    );

    return (
        <div className="navbar bg-base-100/80 backdrop-blur-md sticky top-0 z-50 shadow-sm lg:px-10 py-3">
            <div className="navbar-start">
                {/* Mobile Dropdown */}
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-2xl z-[1] mt-3 w-56 p-4 shadow-xl border border-gray-100 space-y-2">
                        {navLinks}
                    </ul>
                </div>

                <Link to="/" className="flex items-center gap-2">
                    <span className="lg:text-3xl text-xl font-black bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent tracking-tight">
                        PawMART
                    </span>
                </Link>
            </div>

            {/* Desktop Menu */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-2">
                    {navLinks}
                </ul>
            </div>

            <div className="navbar-end gap-3">
                {/* Theme Controller */}
                <div className="hidden sm:flex items-center gap-2 bg-gray-100 dark:bg-gray-800 p-2 rounded-full px-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                    <input onClick={handleThemeChange} type="checkbox" className="toggle toggle-sm bg-purple-500 border-purple-500" />
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                </div>

                {/* User Profile & Auth */}
                <div className="flex items-center gap-3">
                    <div className="avatar group relative cursor-pointer">
                        <div className="w-10 h-10 rounded-full ring ring-purple-500 ring-offset-base-100 ring-offset-2 transition-transform active:scale-90 overflow-hidden">
                            <img
                                src={user?.photoURL ? user.photoURL : userIcon}
                                alt="User"
                                title={user?.displayName || "Guest User"}
                            />
                        </div>
                    </div>

                    {user ? (
                        <button
                            onClick={handleLogout}
                            className='btn btn-sm md:btn-md bg-gray-900 hover:bg-black text-white border-none rounded-xl px-6'
                        >
                            Log Out
                        </button>
                    ) : (
                        <Link
                            to="/auth/login"
                            className='btn btn-sm md:btn-md bg-purple-600 hover:bg-purple-700 text-white border-none rounded-xl px-6 shadow-lg shadow-purple-200'
                        >
                            Login
                        </Link>
                    )}
                </div>
            </div>
            <ToastContainer position="top-center" autoClose={2000} hideProgressBar={false} />
        </div>
    );
};

export default Navbar;