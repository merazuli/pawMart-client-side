import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
    return (
        <section className="bg-gradient-to-r from-blue-100 via-pink-100 to-purple-100 py-16 px-5 md:px-20">
            <title>ToyTopia – Contact</title>
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-pink-600 mb-6">
                    Contact Us
                </h2>
                <p className="text-gray-700 text-lg mb-12 max-w-3xl mx-auto leading-relaxed">
                    💬 We’re always here for you! If you have any questions, suggestions, or feedback,
                    please fill out the form below or reach out to us directly.
                    Welcome to a world of joyful toys for kids! 🧸🌈
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    {/* Contact Form */}
                    <form className="bg-white rounded-2xl shadow-lg p-8 text-left space-y-5">
                        <div>
                            <label className="block text-gray-600 font-semibold mb-2">
                                Your Name
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-pink-400 outline-none"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-gray-600 font-semibold mb-2">
                                Email Address
                            </label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-pink-400 outline-none"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-gray-600 font-semibold mb-2">
                                Message
                            </label>
                            <textarea
                                rows="4"
                                placeholder="Write your message..."
                                className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-pink-400 outline-none"
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-pink-500 text-white font-semibold py-3 rounded-xl hover:bg-pink-600 transition"
                        >
                            Send Message
                        </button>
                    </form>

                    {/* Contact Info */}
                    <div className="space-y-8 bg-white shadow-lg rounded-2xl p-8">
                        <div className="flex flex-col items-center">
                            <FaPhoneAlt className="text-4xl text-pink-500 mb-3" />
                            <h3 className="text-xl font-semibold text-gray-700">Phone</h3>
                            <p className="text-gray-600 mt-1">📞 +880 01618113827</p>
                        </div>

                        <div className="flex flex-col items-center">
                            <FaEnvelope className="text-4xl text-blue-500 mb-3" />
                            <h3 className="text-xl font-semibold text-gray-700">Email</h3>
                            <p className="text-gray-600 mt-1">✉️ merazulislam0164228@gmail.com</p>
                        </div>

                        <div className="flex flex-col items-center">
                            <FaMapMarkerAlt className="text-4xl text-green-500 mb-3" />
                            <h3 className="text-xl font-semibold text-gray-700">Address</h3>
                            <p className="text-gray-600 mt-1 text-center">
                                🏠 12, Toy Street, Dhaka, Bangladesh
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
