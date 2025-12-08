import React, { useContext, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const LoginPage = () => {
    const { handleLogin, setUser, forget } = useContext(AuthContext);
    const emailRef = useRef()
    const location = useLocation();
    const navigate = useNavigate()

    // show password 

    const [show, setShow] = useState(false)
    // console.log(location, navigate)

    const loginHandle = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, password)
        handleLogin(email, password)
            .then(result => {
                const user = result.user;
                toast.success("Login Success")
                setUser(user);
                if (!user.emailVerified) {
                    toast('please verify your email address')
                    return
                }
                navigate(`${location.state ? location.state : "/"}`)
            })
            .catch(error => {
                console.log(error)
                toast.error("please inter valid password")
            })
    }
    // forget password 
    const handleForgetPassword = (e) => {
        const email = emailRef.current.value;
        console.log(email)
        e.preventDefault()
        forget(email)
            .then(() => {
                toast('please check your email ')
            })
            .catch((error) => {
                toast.error(error)
            });
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <title>ToyTopia – Login</title>
            <div className="card w-full max-w-md bg-purple-50 rounded-3xl shadow-2xl p-8">
                <h2 className="text-3xl font-bold text-center text-purple-700 mb-6">
                    Login Your Account
                </h2>
                <form onSubmit={loginHandle} className="space-y-4" >


                    {/* Email */}
                    <div className="flex flex-col">
                        <label className="mb-1 font-semibold text-gray-700">Email</label>
                        <input
                            type="email" name='email'
                            placeholder="Your Email" ref={emailRef}
                            className="input  w-full border-purple-300 focus:border-purple-500 focus:ring focus:ring-purple-200 transition"
                        />
                    </div>

                    {/* Password */}
                    <div className="flex flex-col relative">
                        <label className="mb-1 font-semibold text-gray-700">Password</label>
                        <input
                            type={show ? "text" : "password"}
                            placeholder="Password" name="password"
                            className="input  w-full border-purple-300 focus:border-purple-500 focus:ring focus:ring-purple-200 transition"
                        />
                        <span onClick={() => setShow(!show)} className='absolute right-5 top-10'>
                            {show ? <FaEyeSlash /> : <FaEye />}</span>
                    </div>

                    <div onClick={handleForgetPassword}><a href="" className='link link-hover'>Forget Password?</a> </div>



                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full py-3 mt-4 font-semibold rounded-xl bg-purple-500 hover:bg-purple-600 text-white shadow-lg transition"
                    >
                        Login
                    </button>

                    {/* Links */}
                    <div className="flex justify-between items-center text-md">

                        <p className="  hover:text-purple-700 ">
                            Don't have an account? <Link to="/auth/register" className='font-bold text-red-600'>Register</Link>
                        </p>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default LoginPage;