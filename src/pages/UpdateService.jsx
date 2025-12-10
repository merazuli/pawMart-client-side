import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import { AuthContext } from '../provider/AuthProvider';
import { useNavigate, useParams } from 'react-router';
import axios from 'axios';
import Swal from 'sweetalert2';

const UpdateService = () => {
    const { user } = useContext(AuthContext);
    const { id } = useParams();
    const [service, setService] = useState();
    const navigation = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:3000/services/${id}`)
            .then(res => {
                setService(res.data)
            })
    }, [id])
    console.log(service)

    const handleUpdate = (e) => {
        e.preventDefault()
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
            date,
            createdAt: service?.createdAt,
        }
        // console.log(formData)
        axios.put(`http://localhost:3000/update/${id}`, formData)
            .then(res => {
                setService(res.data)
                if (res.data.acknowledged == true) {
                    Swal.fire({
                        title: "Service Is Update Successfully!",
                        icon: "success",
                        draggable: true
                    });
                }
                navigation('/my-services')


            })
            .catch(err => { console.log(err) })

    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="max-w-xl mx-auto bg-white shadow-lg p-6 rounded-xl">
                <h2 className="text-2xl font-bold mb-4 text-center">Update Listing</h2>

                <form onSubmit={handleUpdate} className="space-y-4 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-6 rounded-xl shadow-xl border border-purple-200">

                    {/* Product/Pet Name */}
                    <div>
                        <label className="font-semibold text-purple-700">Product / Pet Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter name"
                            defaultValue={service?.name}
                            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-purple-500 transition"
                            required
                        />
                    </div>

                    {/* Category */}
                    <div>
                        <label className="font-semibold text-purple-700">Category</label>
                        <select
                            name="category"
                            value={service?.category || ""}
                            onChange={(e) =>
                                setService({ ...service, category: e.target.value })
                            }
                            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-purple-500 transition"
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
                        <label className="font-semibold text-purple-700">Price</label>
                        <input
                            type="number"
                            name="price"
                            placeholder="Enter price"
                            defaultValue={service?.price}
                            className="w-full p-2 border rounded-lg bg-gray-100 focus:ring-2 focus:ring-purple-400 transition"
                        />
                    </div>

                    {/* Location */}
                    <div>
                        <label className="font-semibold text-purple-700">Location</label>
                        <input
                            type="text"
                            name="location"
                            defaultValue={service?.location}
                            placeholder="Enter location"
                            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-purple-400 transition"
                            required
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="font-semibold text-purple-700">Description</label>
                        <textarea
                            name="description"
                            placeholder="Write details"
                            defaultValue={service?.description}
                            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-purple-400 transition"
                            rows="3"
                            required
                        ></textarea>
                    </div>

                    {/* Image URL */}
                    <div>
                        <label className="font-semibold text-purple-700">Image URL</label>
                        <input
                            type="text"
                            name="image"
                            defaultValue={service?.image}
                            placeholder="https://example.com/image.jpg"
                            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-purple-400 transition"
                            required
                        />
                    </div>

                    {/* Date */}
                    <div>
                        <label className="font-semibold text-purple-700">Pick Up Date</label>
                        <input
                            type="date"
                            name="date"
                            defaultValue={service?.date}
                            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-purple-400 transition"
                            required
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="font-semibold text-purple-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            defaultValue={user?.email}
                            readOnly
                            className="w-full p-2 border rounded-lg bg-gray-100"
                        />
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-2 rounded-lg font-bold shadow-lg hover:shadow-xl hover:from-purple-700 hover:to-indigo-700 transition duration-200"
                    >
                        Update
                    </button>
                </form>

            </div>
        </div>
    );
};

export default UpdateService;
