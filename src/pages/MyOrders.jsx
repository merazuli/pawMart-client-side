import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import axios from 'axios';
import Footer from './Footer';

const MyOrders = () => {
    const [myOrders, setMyOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://missionscic10-xi.vercel.app/orders')
            .then(res => {
                setMyOrders(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
                setLoading(false);
            });
    }, []);

    const formatDate = (dateStr) => {
        if (!dateStr) return "---";
        const date = new Date(dateStr);
        return date.toLocaleDateString("en-GB").replaceAll("/", "-") + " " +
            date.toLocaleString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true });
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Navbar />

            <main className="flex-grow container mx-auto px-4 py-8">
                <div className="mb-8">
                    <h2 className="text-3xl text-center font-bold text-indigo-800">My Orders</h2>
                    <p className="text-gray-500">Manage and track your recent pet supplies orders.</p>
                </div>

                {loading ? (
                    <div className="flex justify-center items-center h-64">
                        <span className="loading loading-ring loading-lg text-purple-600"></span>
                    </div>
                ) : myOrders.length === 0 ? (
                    <div className="bg-white p-10 rounded-2xl shadow-sm text-center">
                        <p className="text-xl text-gray-500">No orders found yet! 🐾</p>
                    </div>
                ) : (
                    <div className="bg-white shadow-sm rounded-2xl overflow-hidden border border-gray-100">
                        {/* Desktop Table View */}
                        <div className="hidden md:block overflow-x-auto">
                            <table className="table table-zebra w-full">
                                <thead className="bg-gray-50 text-gray-600 uppercase text-xs">
                                    <tr>
                                        <th className="py-4">SL</th>
                                        <th>Product Details</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Contact & Address</th>
                                        <th>Order Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {myOrders.map((order, index) => (
                                        <tr key={order._id} className="hover:bg-purple-50/30 transition-colors">
                                            <th className="font-medium text-gray-400">{index + 1}</th>
                                            <td>
                                                <span className="font-bold text-purple-700">{order?.productName}</span>
                                            </td>
                                            <td className="font-semibold text-gray-700">${order?.price}</td>
                                            <td>
                                                <div className="badge badge-outline border-gray-300">{order?.quantity} pcs</div>
                                            </td>
                                            <td className="text-sm">
                                                <p className="font-medium">{order?.phone || "N/A"}</p>
                                                <p className="text-gray-500 italic">{order?.address || "No address"}</p>
                                            </td>
                                            <td className="text-xs text-gray-500">
                                                {formatDate(order?.date)}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Mobile Card View */}
                        <div className="md:hidden divide-y divide-gray-100">
                            {myOrders.map((order, index) => (
                                <div key={order._id} className="p-5 flex flex-col gap-2">
                                    <div className="flex justify-between items-start">
                                        <span className="text-xs font-bold text-purple-500 uppercase">Order #{index + 1}</span>
                                        <span className="text-xs text-gray-400">{formatDate(order?.date)}</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-800">{order?.productName}</h3>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-500 font-medium">Price: ${order?.price}</span>
                                        <span className="text-gray-500">Qty: {order?.quantity}</span>
                                    </div>
                                    <div className="mt-2 p-3 bg-gray-50 rounded-xl text-xs text-gray-600 leading-relaxed">
                                        <p>📞 {order?.phone || "N/A"}</p>
                                        <p>📍 {order?.address || "No address provided"}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </main>

            {/* Adjusted Footer */}
            <footer className="mt-auto">
                <Footer />
            </footer>
        </div>
    );
};

export default MyOrders;