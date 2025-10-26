import React from 'react';
import { FaSmileBeam, FaTruck, FaGift, FaHeart } from "react-icons/fa";

const AboutUsPage = () => {
    return (
        <section className="bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 py-16 px-5 md:px-20">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-pink-600 mb-6">
                    আমাদের সম্পর্কে
                </h2>
                <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
                    🎈 <span className="font-semibold text-pink-500">Kids Toy Store</span>
                    হলো আপনার সন্তানের হাসির দুনিয়া! আমরা বিশ্বাস করি প্রতিটি শিশুর শেখা, খেলা ও আনন্দের যাত্রা হওয়া উচিত
                    রঙিন ও মজাদার। 🧸
                    তাই আমরা নিয়ে এসেছি নিরাপদ, শিক্ষামূলক এবং মানসম্মত খেলনা—
                    যা ছোটদের কল্পনাশক্তি ও সৃজনশীলতাকে আরও সমৃদ্ধ করে তোলে। 🌈
                </p>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-10">
                    <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
                        <FaSmileBeam className="text-5xl text-yellow-500 mx-auto mb-3" />
                        <h3 className="text-xl font-semibold text-pink-600 mb-2">শিশুদের আনন্দ</h3>
                        <p className="text-gray-600 text-sm">আমাদের খেলনাগুলো তৈরি করা হয়েছে শিশুদের মুখে হাসি ফোটানোর জন্য।</p>
                    </div>

                    <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
                        <FaTruck className="text-5xl text-blue-500 mx-auto mb-3" />
                        <h3 className="text-xl font-semibold text-pink-600 mb-2">দ্রুত ডেলিভারি</h3>
                        <p className="text-gray-600 text-sm">দেশের যেকোনো জায়গায় আমরা দ্রুত ও নিরাপদে পণ্য পৌঁছে দিই।</p>
                    </div>

                    <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
                        <FaGift className="text-5xl text-green-500 mx-auto mb-3" />
                        <h3 className="text-xl font-semibold text-pink-600 mb-2">উপহার উপযোগী</h3>
                        <p className="text-gray-600 text-sm">জন্মদিন বা উৎসবে প্রিয়জনকে চমক দিতে দারুণ সব খেলনা সংগ্রহ।</p>
                    </div>

                    <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
                        <FaHeart className="text-5xl text-red-500 mx-auto mb-3" />
                        <h3 className="text-xl font-semibold text-pink-600 mb-2">ভালোবাসা দিয়ে তৈরি</h3>
                        <p className="text-gray-600 text-sm">প্রতিটি খেলনা আমরা ভালোবাসা ও যত্নের সাথে বেছে নিই।</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUsPage;
