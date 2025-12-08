import React, { useContext } from 'react';
import axios from "axios";
import Navbar from '../Components/Navbar';
import { AuthContext } from '../provider/AuthProvider';

const AddService = () => {
    const { user } = useContext(AuthContext)

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
        axios.post('http://localhost:3000/services', formData)
            .then(res => {
                console.log(res)
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
                        <label className="font-semibold">Product / Pet Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter name"

                            className="w-full p-2 border rounded-lg"
                            required
                        />
                    </div>

                    {/* Category */}
                    <div>
                        <label className="font-semibold">Category</label>
                        <select
                            name="category"

                            className="w-full p-2 border rounded-lg"
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
                        <label className="font-semibold">Price</label>
                        <input
                            type="number"
                            name="price"
                            placeholder="Enter price"
                            className="w-full p-2 border rounded-lg bg-gray-100"
                        />
                        {/* {formData.category === "Pets" && (
                        <p className="text-sm text-gray-500">Pets have price = 0</p>
                    )} */}
                    </div>

                    {/* Location */}
                    <div>
                        <label className="font-semibold">Location</label>
                        <input
                            type="text"
                            name="location"
                            placeholder="Enter location"
                            className="w-full p-2 border rounded-lg"
                            required
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="font-semibold">Description</label>
                        <textarea
                            name="description"
                            placeholder="Write details"

                            className="w-full p-2 border rounded-lg"
                            rows="3"
                            required
                        ></textarea>
                    </div>

                    {/* Image URL */}
                    <div>
                        <label className="font-semibold">Image URL</label>
                        <input
                            type="text"
                            name="image"
                            placeholder="https://example.com/image.jpg"
                            className="w-full p-2 border rounded-lg"
                            required
                        />
                    </div>

                    {/* Date (Pick Up) */}
                    <div>
                        <label className="font-semibold">Pick Up Date</label>
                        <input
                            type="date"
                            name="date"
                            className="w-full p-2 border rounded-lg"
                            required
                        />
                    </div>

                    {/* Email (readonly) */}
                    <div>
                        <label className="font-semibold">Email</label>
                        <input
                            type="email"
                            name="email"
                            defaultValue={user?.email}
                            className="w-full p-2 border rounded-lg bg-gray-100"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white p-2 rounded-lg font-semibold hover:bg-blue-700 duration-200"
                    >
                        Submit Listing
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddService;