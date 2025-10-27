import React from 'react';
import { FaSmileBeam, FaTruck, FaGift, FaHeart } from "react-icons/fa";

const AboutUsPage = () => {
    return (
        <section className="bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 py-12 md:py-16 px-5 md:px-20">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-pink-600 mb-3">
                    About Us
                </h2>
                <div className="w-24 h-1 bg-pink-500 mx-auto mb-6 rounded-full"></div>

                <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
                    🎈 <span className="font-semibold text-pink-500">Kids Toy Store</span>
                    is your child’s world of smiles! We believe that every child’s journey of learning, playing,
                    and growing should be colorful and fun. 🧸
                    That’s why we bring you safe, educational, and high-quality toys —
                    designed to enhance creativity and imagination. 🌈
                </p>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-10">
                    <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl hover:-translate-y-2 transform transition duration-300">
                        <FaSmileBeam className="text-5xl text-yellow-500 mx-auto mb-3" />
                        <h3 className="text-xl font-semibold text-pink-600 mb-2">Joy for Kids</h3>
                        <p className="text-gray-600 text-sm">Our toys are made to bring endless smiles to children’s faces.</p>
                    </div>

                    <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl hover:-translate-y-2 transform transition duration-300">
                        <FaTruck className="text-5xl text-blue-500 mx-auto mb-3" />
                        <h3 className="text-xl font-semibold text-pink-600 mb-2">Fast Delivery</h3>
                        <p className="text-gray-600 text-sm">We deliver quickly and safely anywhere in the country.</p>
                    </div>

                    <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl hover:-translate-y-2 transform transition duration-300">
                        <FaGift className="text-5xl text-green-500 mx-auto mb-3" />
                        <h3 className="text-xl font-semibold text-pink-600 mb-2">Perfect Gifts</h3>
                        <p className="text-gray-600 text-sm">Find amazing toys that make the perfect surprise for birthdays and celebrations.</p>
                    </div>

                    <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl hover:-translate-y-2 transform transition duration-300">
                        <FaHeart className="text-5xl text-red-500 mx-auto mb-3" />
                        <h3 className="text-xl font-semibold text-pink-600 mb-2">Made with Love</h3>
                        <p className="text-gray-600 text-sm">Every toy is carefully chosen and crafted with love and care.</p>
                    </div>
                </div>

                <p className="text-gray-500 text-sm mt-12 italic">
                    ❤️ Bringing happiness to every child, one toy at a time. ❤️
                </p>
            </div>
        </section>
    );
};

export default AboutUsPage;
