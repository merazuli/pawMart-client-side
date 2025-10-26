import { useContext } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';

const RegisterPage = () => {

    const { createUser, setUser } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                setUser(user)
                toast.success("Register Success")
            })
            .catch(error => {
                toast.error(error.code)
            })

        // console.log(name, photo, password, email)
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="card w-full max-w-md bg-purple-50 rounded-3xl shadow-2xl p-8">
                <h2 className="text-3xl font-bold text-center text-purple-700 mb-6">
                    Register Your Account
                </h2>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    {/* Name */}
                    <div className="flex flex-col">
                        <label className="mb-1 font-semibold text-gray-700">Name</label>
                        <input name="name"
                            type="text"
                            placeholder="Your Name"
                            className="input  w-full border-purple-300 focus:border-purple-500 focus:ring focus:ring-purple-200 transition"
                        />
                    </div>

                    {/* Photo URL */}
                    <div className="flex flex-col">
                        <label className="mb-1 font-semibold text-gray-700">Photo URL</label>
                        <input
                            type="text" name="photo"
                            placeholder="Photo URL"
                            className="input  w-full border-purple-300 focus:border-purple-500 focus:ring focus:ring-purple-200 transition"
                        />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col">
                        <label className="mb-1 font-semibold text-gray-700">Email</label>
                        <input
                            type="email" name="email"
                            placeholder="Your Email"
                            className="input  w-full border-purple-300 focus:border-purple-500 focus:ring focus:ring-purple-200 transition" required
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
                            Already have an account? <Link to="/auth/login" className='font-bold text-red-600'>Login</Link>
                        </p>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full py-3 mt-4 font-semibold rounded-xl bg-purple-500 hover:bg-purple-600 text-white shadow-lg transition"
                    >
                        Register
                    </button>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default RegisterPage;
