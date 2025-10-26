import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
    return (
        <section className="bg-gradient-to-r from-blue-100 via-pink-100 to-purple-100 py-16 px-5 md:px-20">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-pink-600 mb-6">
                    আমাদের সাথে যোগাযোগ করুন
                </h2>
                <p className="text-gray-700 text-lg mb-12 max-w-3xl mx-auto leading-relaxed">
                    💬 আমরা সবসময় আপনার পাশে আছি! আপনার কোনো প্রশ্ন, পরামর্শ বা মতামত থাকলে
                    নিচের ফর্মটি পূরণ করুন বা সরাসরি আমাদের সাথে যোগাযোগ করুন।
                    শিশুদের আনন্দময় খেলনার দুনিয়ায় আপনাকে স্বাগতম 🧸🌈
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    {/* Contact Form */}
                    <form className="bg-white rounded-2xl shadow-lg p-8 text-left space-y-5">
                        <div>
                            <label className="block text-gray-600 font-semibold mb-2">
                                আপনার নাম
                            </label>
                            <input
                                type="text"
                                placeholder="নাম লিখুন"
                                className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-pink-400 outline-none"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-gray-600 font-semibold mb-2">
                                ইমেইল ঠিকানা
                            </label>
                            <input
                                type="email"
                                placeholder="ইমেইল লিখুন"
                                className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-pink-400 outline-none"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-gray-600 font-semibold mb-2">
                                বার্তা
                            </label>
                            <textarea
                                rows="4"
                                placeholder="আপনার বার্তা লিখুন..."
                                className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-pink-400 outline-none"
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-pink-500 text-white font-semibold py-3 rounded-xl hover:bg-pink-600 transition"
                        >
                            বার্তা পাঠান
                        </button>
                    </form>

                    {/* Contact Info */}
                    <div className="space-y-8 bg-white shadow-lg rounded-2xl p-8">
                        <div className="flex flex-col items-center">
                            <FaPhoneAlt className="text-4xl text-pink-500 mb-3" />
                            <h3 className="text-xl font-semibold text-gray-700">ফোন</h3>
                            <p className="text-gray-600 mt-1">📞 +880 01618113827</p>
                        </div>

                        <div className="flex flex-col items-center">
                            <FaEnvelope className="text-4xl text-blue-500 mb-3" />
                            <h3 className="text-xl font-semibold text-gray-700">ইমেইল</h3>
                            <p className="text-gray-600 mt-1">✉️merazulislam0164228@gmail.com</p>
                        </div>

                        <div className="flex flex-col items-center">
                            <FaMapMarkerAlt className="text-4xl text-green-500 mb-3" />
                            <h3 className="text-xl font-semibold text-gray-700">ঠিকানা</h3>
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
