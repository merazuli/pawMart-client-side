import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';

const LoginPage = () => {
    const { handleLogin, setUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate()
    // console.log(location, navigate)

    const loginHandle = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, password)
        handleLogin(email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                toast.success("Login Success")
                navigate(`${location.state ? location.state : "/"}`)
            })
            .catch(error => {
                toast.error(error)
            })
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
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
                            placeholder="Your Email"
                            className="input  w-full border-purple-300 focus:border-purple-500 focus:ring focus:ring-purple-200 transition"
                        />
                    </div>

                    {/* Password */}
                    <div className="flex flex-col">
                        <label className="mb-1 font-semibold text-gray-700">Password</label>
                        <input
                            type="password"
                            placeholder="Password" name="password"
                            className="input  w-full border-purple-300 focus:border-purple-500 focus:ring focus:ring-purple-200 transition"
                        />
                    </div>

                    {/* Links */}
                    <div className="flex justify-between items-center text-md">

                        <p className="  hover:text-purple-700 ">
                            Don't have an account? <Link to="/auth/register" className='font-bold text-red-600'>Register</Link>
                        </p>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full py-3 mt-4 font-semibold rounded-xl bg-purple-500 hover:bg-purple-600 text-white shadow-lg transition"
                    >
                        Login
                    </button>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default LoginPage;