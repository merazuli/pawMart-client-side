import React, { useContext } from 'react';
import axios from "axios";
import Swal from 'sweetalert2';
import Navbar from '../Components/Navbar';
import { AuthContext } from '../provider/AuthProvider';
import { useNavigate } from 'react-router';

const AddService = () => {
    const { user } = useContext(AuthContext);
    const navigation = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const category = form.category.value;
        const price = parseInt(form.price.value);
        const location = form.location.value;
        const description = form.description.value;
        const image = form.image.value;
        const email = form.email.value;
        const date = form.date.value;


        const formData = {
            name,
            category,
            price,
            location,
            description,
            image,
            email,
            date
        }
        // console.log(formData);
        axios.post('https://missionscic10-xi.vercel.app/services', formData)
            .then(res => {
                console.log(res.data)
                if (res.data.acknowledged) {
                    Swal.fire({
                        title: "Service Is Created Successfully!",
                        icon: "success",
                        draggable: true
                    });
                    form.reset()
                    navigation('/')
                } else {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Something went wrong!",
                    });
                }

            })


    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="max-w-xl mx-auto bg-white shadow-lg p-6 rounded-xl">
                <h2 className="text-2xl font-bold mb-4 text-center">Add New Listing</h2>

                <form onSubmit={handleSubmit} className="space-y-4">

                    {/* Product/Pet Name */}
                    <div>
                        <label className="font-semibold text-blue-700">Product / Pet Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter name"
                            className="w-full p-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    {/* Category */}
                    <div>
                        <label className="font-semibold text-purple-700">Category</label>
                        <select
                            name="category"
                            className="w-full p-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                            required
                        >
                            <option value="">Select Category</option>
                            <option value="Pets">Pets</option>
                            <option value="Food">Food</option>
                            <option value="Accessories">Accessories</option>
                            <option value="Care Products">Care Products</option>
                        </select>
                    </div>

                    {/* Price */}
                    <div>
                        <label className="font-semibold text-green-700">Price</label>
                        <input
                            type="number"
                            name="price"
                            placeholder="Enter price"
                            className="w-full p-2 border border-green-300 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>

                    {/* Location */}
                    <div>
                        <label className="font-semibold text-teal-700">Location</label>
                        <input
                            type="text"
                            name="location"
                            placeholder="Enter location"
                            className="w-full p-2 border border-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                            required
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="font-semibold text-orange-700">Description</label>
                        <textarea
                            name="description"
                            placeholder="Write details"
                            className="w-full p-2 border border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                            rows="3"
                            required
                        ></textarea>
                    </div>

                    {/* Image URL */}
                    <div>
                        <label className="font-semibold text-pink-700">Image URL</label>
                        <input
                            type="text"
                            name="image"
                            placeholder="https://example.com/image.jpg"
                            className="w-full p-2 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                            required
                        />
                    </div>

                    {/* Date */}
                    <div>
                        <label className="font-semibold text-indigo-700">Pick Up Date</label>
                        <input
                            type="date"
                            name="date"
                            className="w-full p-2 border border-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            required
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="font-semibold text-red-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            defaultValue={user?.email}
                            className="w-full p-2 border border-red-300 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white p-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 duration-200 shadow-lg"
                    >
                        Submit Listing
                    </button>

                </form>

            </div>
        </div>
    );
};

export default AddService;