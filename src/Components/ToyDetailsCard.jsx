import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";
import { toast } from "react-toastify";

const ToyDetailsCard = ({ toy }) => {
    const {
        toyName,
        rating = {},
        description,
        price,
        sellerName,
        sellerEmail,
        categoryId,
        availableQuantity,
        subCategory,
    } = toy || {};

    return (
        <div className="max-w-3xl mx-auto">
            <div className=" bg-gradient-to-br mb-5 from-pink-50 via-purple-50 to-blue-50 shadow-lg rounded-2xl overflow-hidden border border-purple-100 hover:shadow-2xl transition-all duration-300">
                {/* Image */}
                <figure className="relative">
                    <img
                        src={toy.pictureURL}
                        alt={toyName}
                        className="w-full h-72 object-cover"
                    />
                    {rating?.badge && (
                        <span className="absolute top-4 right-4 bg-purple-600 text-white text-sm px-3 py-1 rounded-full shadow-md">
                            {rating.badge}
                        </span>
                    )}
                </figure>

                {/* Body */}
                <div className="p-6 space-y-5">
                    <h2 className="text-3xl font-bold text-center text-purple-700">
                        {toyName}
                    </h2>

                    {/* Info Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-gray-700 text-center">
                        <div className="flex flex-col items-center">
                            <FaStar className="text-yellow-400 text-lg mb-1" />
                            <p className="font-medium">
                                Rating: <span className="text-gray-800">{rating?.number || "N/A"}</span>
                            </p>
                        </div>

                        <div className="flex flex-col items-center">
                            <p className="font-medium">Price</p>
                            <p className="text-yellow-800 font-semibold bg-yellow-100 px-3 py-1 rounded-lg shadow-sm">
                                ${price}
                            </p>
                        </div>

                        <div className="flex flex-col items-center">
                            <p className="font-medium">Available</p>
                            <p className="text-purple-700 font-semibold">{availableQuantity || 0}</p>
                        </div>

                        <div className="flex flex-col items-center">
                            <p className="font-medium">Category</p>
                            <p className="text-pink-600 font-semibold">{subCategory || "N/A"}</p>
                        </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed text-justify">
                        <span className="font-semibold text-purple-700">Description:</span>{" "}
                        {description || "No description available."}
                    </p>

                    {/* Seller Info */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-t pt-3 text-gray-700 text-sm md:text-base gap-2">
                        <p>
                            Seller:{" "}
                            <span className="font-bold text-purple-700">{sellerName || "Unknown"}</span>
                        </p>
                        <p>
                            Email:{" "}
                            <span className="font-medium text-blue-600">{sellerEmail || "Not provided"}</span>
                        </p>
                    </div>

                    {/* Back Button */}
                    <div className="flex justify-center pt-4">
                        <Link
                            to={`/category/${categoryId}`}
                            className="btn bg-gradient-to-r from-purple-500 to-pink-500 text-white border-none hover:scale-105 transition-transform duration-300 px-6 py-2 rounded-full shadow-md"
                        >
                            Back To Category
                        </Link>
                    </div>
                </div>
            </div>
            {/* form section */}
            <form
                className="flex flex-col gap-4 bg-white/30 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/40 w-full max-w-md mx-auto"
                onSubmit={(e) => {
                    e.preventDefault();
                    toast.success("Thank you for subscribing!");
                    e.target.reset()
                }}
            >

                <input
                    type="text"
                    placeholder="Your Name"
                    required
                    className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-400 focus:outline-none text-gray-800 placeholder-gray-500 bg-white/80"
                />

                <input
                    type="email"
                    placeholder="Your Email"
                    required
                    className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-400 focus:outline-none text-gray-800 placeholder-gray-500 bg-white/80"
                />

                <button
                    type="submit"
                    className="mt-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-lg hover:opacity-90 transition-all duration-300"
                >
                    Subscribe
                </button>

                <p className="text-xs text-gray-500 text-center mt-3">
                    We respect your privacy. Unsubscribe anytime.
                </p>
            </form>

        </div>
    );
};

export default ToyDetailsCard;
