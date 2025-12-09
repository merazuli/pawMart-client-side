import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import Navbar from '../Components/Navbar';
import { AuthContext } from '../provider/AuthProvider';
import axios from 'axios';


const ToyDetails = () => {
    const { id } = useParams();
    const [services, setServices] = useState([])
    const [loading, setLoading] = useState(true)
    const { user } = useContext(AuthContext)
    const navigation = useNavigate()

    // console.log(services)

    // console.log(toy)
    useEffect(() => {
        fetch(`http://localhost:3000/services/${id}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setServices(data)
                setLoading(false)
            })
            .catch(err => console.log(err))
    }, [id])
    // order 
    const handleOrder = (e) => {
        e.preventDefault();
        const form = e.target;
        const productName = form.productName.value;
        const buyerName = form.buyerName.value;
        const buyerEmail = form.buyerEmail.value;
        const quantity = parseInt(form.quantity.value);
        const price = parseInt(form.price.value);
        const address = form.address.value;
        const phone = form.phone.value;
        const note = form.note.value;

        const formData = {
            productId: id,
            productName,
            buyerName,
            buyerEmail,
            quantity,
            price,
            address,
            phone,
            note,
            data: new Date()
        }
        axios.post('http://localhost:3000/orders', formData)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })


    }

    if (loading) {
        <span className="loading loading-spinner loading-xl"></span>
    }
    return (
        <div>

            <Navbar></Navbar>
            <div className="max-w-3xl mx-auto mt-20">
                <div className="mt-5 bg-gradient-to-br mb-5 from-pink-50 via-purple-50 to-blue-50 shadow-lg rounded-2xl overflow-hidden border border-purple-100 hover:shadow-2xl transition-all duration-300">
                    {/* Image */}
                    <figure className="relative">
                        <img
                            src={services?.image}
                            alt=""
                            className="w-full h-72 object-cover"
                        />

                    </figure>

                    {/* Body */}
                    <div className="p-6 space-y-5">
                        <h2 className="text-3xl font-bold text-center text-purple-700">
                            {services?.name}
                        </h2>

                        {/* Info Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-gray-700 text-center">

                            <div className="flex items-center">
                                <p className="font-medium">Price</p>
                                <p className="text-yellow-800 font-semibold bg-yellow-100 px-3 py-1 rounded-lg shadow-sm">
                                    ${services?.price}
                                </p>
                            </div>

                        </div>

                        {/* Description */}
                        <p className="text-gray-600 leading-relaxed text-justify">
                            <span className="font-semibold text-purple-700">Description:</span>{" "}
                            {services?.description || "No description available."}
                        </p>

                        {/* Back Button */}
                        <div className="flex justify-center pt-4">
                            {/* You can open the modal using document.getElementById('ID').showModal() method */}
                            <button
                                className="btn flex justify-center text-white font-semibold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-purple-600 hover:via-pink-600 hover:to-red-600 border-none shadow-md hover:shadow-lg transition-all duration-300"
                                onClick={() => document.getElementById('my_modal_3').showModal()}
                            >
                                Adapt/Order
                            </button>

                            <dialog id="my_modal_3" className="modal">
                                {/* ----- */}
                                <div className="modal-box bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 shadow-2xl border border-purple-200 rounded-xl">

                                    <form method="dialog">
                                        {/* Close Button */}
                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-purple-600 hover:bg-purple-200">
                                            ✕
                                        </button>
                                    </form>

                                    <h3 className="font-bold text-2xl text-purple-700 mb-4 text-center">
                                        Order Details
                                    </h3>

                                    <form onSubmit={handleOrder} className="space-y-3">
                                        {/* Product Name */}
                                        <div>
                                            <label className="label text-purple-700">Product Name</label>
                                            <input name='productName' readOnly defaultValue={services?.name} type="text" className="input input-bordered w-full bg-white/70 border-purple-300 focus:border-purple-500 focus:ring-purple-500" placeholder="Product Name" />
                                        </div>

                                        {/* Buyer Name */}
                                        <div>
                                            <label className="label text-purple-700">Buyer Name</label>
                                            <input name='buyerName' defaultValue={user?.displayName} type="text" className="input input-bordered w-full bg-white/70 border-purple-300 focus:border-purple-500" placeholder="Your Name" />
                                        </div>

                                        {/* Buyer Email */}
                                        <div>
                                            <label className="label text-purple-700">Buyer Email</label>
                                            <input name='buyerEmail' readOnly defaultValue={user?.email} type="email" className="input input-bordered w-full bg-white/70 border-purple-300 focus:border-purple-500" placeholder="Email" />
                                        </div>

                                        {/* Quantity */}
                                        <div>
                                            <label className="label text-purple-700">Quantity</label>
                                            <input required name="quantity" type="number" className="input input-bordered w-full bg-white/70 border-purple-300 focus:border-purple-500" placeholder="Quantity" />
                                        </div>

                                        {/* Price */}
                                        <div>
                                            <label className="label text-purple-700">Price</label>
                                            <input name="price" readOnly defaultValue={services?.price} type="number" className="input input-bordered w-full bg-white/70 border-purple-300 focus:border-purple-500" placeholder="Price" />
                                        </div>

                                        {/* Address */}
                                        <div>
                                            <label className="label text-purple-700">Address</label>
                                            <input defaultValue={services?.location} name="address" type="text" className="input input-bordered w-full bg-white/70 border-purple-300 focus:border-purple-500" placeholder="Address" />
                                        </div>

                                        {/* Phone */}
                                        <div>
                                            <label className="label text-purple-700">Phone</label>
                                            <input name="phone" type="text" className="input input-bordered w-full bg-white/70 border-purple-300 focus:border-purple-500" placeholder="Phone Number" />
                                        </div>

                                        {/* Notes */}
                                        <div>
                                            <label className="label text-purple-700">Additional Note</label>
                                            <textarea name="note" className="textarea textarea-bordered w-full bg-white/70 border-purple-300 focus:border-purple-500" placeholder="Write any notes here..."></textarea>
                                        </div>

                                        {/* Submit Button */}
                                        <button className="btn w-full text-white font-semibold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:opacity-90 mt-3 shadow-md">
                                            Submit Order
                                        </button>
                                    </form>
                                </div>

                            </dialog>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default ToyDetails;