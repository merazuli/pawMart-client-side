import React from 'react';
import { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import { toast } from 'react-toastify';
import userIcon from "../assets/user.png"

const Navbar = () => {
    const { user, setUser, logOutUser } = useContext(AuthContext);


    const handleLogout = () => {
        logOutUser()
            .then(() => {
                // setUser(null)
                toast.success("Log Out Success")
            })
            .catch(error => {
                toast.error(error.code)
            })
    }

    return (
        <div className="navbar bg-base-100 shadow-sm px-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <NavLink className='font-semibold' to="/">Home</NavLink>
                        <NavLink className='font-semibold' to="/about-us">About Us</NavLink>
                        <NavLink className='font-semibold' to="/contact-us">Contact Us</NavLink>
                    </ul>
                </div>
                <a className="text-4xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                    ToyTopia
                </a>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal flex gap-10  px-1">
                    <NavLink className='font-semibold' to="/">Home</NavLink>
                    <NavLink className='font-semibold' to="/about-us">About Us</NavLink>
                    <NavLink className='font-semibold' to="/contact-us">Contact Us</NavLink>
                </ul>
            </div>
            <div className="navbar-end gap-5">
                <img
                    className="w-10 h-10 object-cover rounded-full"
                    src={user?.photoURL || userIcon}
                    alt={user?.displayName || "Guest User"}
                    title={user?.displayName || "Guest User"} // This will show on hover
                />

                {/* <img className='w-10 h-10 object-cover rounded-full' src={user?.photoURL || userIcon}
                    alt="" /> */}
                {/* <img className="w-20 rounded-full" src={`${user ? user.photoURL : userIcon}`} alt="" title={user?.displayName || user?.email || "Guest User"} /> */}
                {user ? <button onClick={handleLogout} className='btn'>Log Out</button> : <Link to="/auth/login" className='btn'>Login</Link>}
            </div>
        </div>
    );
};

export default Navbar;