import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import { AuthContext } from '../provider/AuthProvider';
import { useNavigate, useParams } from 'react-router';
import axios from 'axios';

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
        console.log(formData)
        axios.put(`http://localhost:3000/update/${id}`, formData)
            .then(res => {
                setService(res.data)
                navigation('/my-services')

            })
            .catch(err => { console.log(err) })

    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="max-w-xl mx-auto bg-white shadow-lg p-6 rounded-xl">
                <h2 className="text-2xl font-bold mb-4 text-center">Update Listing</h2>

                <form onSubmit={handleUpdate} className="space-y-4">

                    {/* Product/Pet Name */}
                    <div>
                        <label className="font-semibold">Product / Pet Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter name"
                            defaultValue={service?.name}
                            className="w-full p-2 border rounded-lg"
                            required
                        />
                    </div>

                    {/* Category */}
                    <div>
                        <label className="font-semibold">Category</label>
                        <select
                            name="category"
                            value={service?.category || ""}
                            onChange={(e) =>
                                setService({ ...service, category: e.target.value })
                            }
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
                            defaultValue={service?.price}
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
                            defaultValue={service?.location}
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
                            defaultValue={service?.description}
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
                            defaultValue={service?.image}
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
                            defaultValue={service?.date}
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
                            defaultValue={user?.email} readOnly
                            className="w-full p-2 border rounded-lg bg-gray-100"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white p-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 duration-200 shadow-lg"
                    >
                        Update
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateService;
