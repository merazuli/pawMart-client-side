import React from 'react';

const WhyAdopt = () => {
    return (
        <section className="relative py-16 md:py-24 bg-gradient-to-b from-purple-50 to-white overflow-hidden">

            {/* Decorative Paw Icons - Mobile এ এগুলো সাইজ কমিয়ে দেওয়া হয়েছে */}
            <div className="absolute top-5 left-5 text-pink-300 text-4xl md:text-6xl opacity-20 select-none">🐾</div>
            <div className="absolute bottom-5 right-5 text-purple-300 text-4xl md:text-6xl opacity-20 select-none">🐾</div>

            <div className="max-w-6xl mx-auto text-center px-4 sm:px-6">

                {/* Title - HR ট্যাগকে রেসপনসিভ করা হয়েছে */}
                <div className="relative inline-block">
                    <h2 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent drop-shadow-sm px-2">
                        Why Adopt from PawMart?
                    </h2>
                    <div className="mt-2 h-1 w-24 md:w-48 mx-auto bg-gradient-to-r from-pink-300 to-purple-300 rounded-full"></div>
                </div>

                <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
                    Adopting a pet not only gives a homeless animal a loving family but also
                    creates space for another rescue. PawMart ensures safe, verified,
                    and responsible adoptions for a brighter future. 💛
                </p>

                {/* Benefit Cards - Grid system updated */}
                <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

                    {/* Card 1 */}
                    <div className="bg-white/70 backdrop-blur-xl p-6 md:p-8 rounded-3xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-purple-100 text-center flex flex-col items-center">
                        <div className="w-16 h-16 md:w-20 md:h-20 bg-pink-50 rounded-2xl flex items-center justify-center text-4xl md:text-5xl mb-6 shadow-inner">
                            🐶
                        </div>
                        <h3 className="text-xl font-bold text-purple-700">Save a Life</h3>
                        <p className="text-gray-600 mt-3 text-sm md:text-base leading-relaxed">
                            Every adoption gives a rescued pet a second chance at life and a forever home.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white/70 backdrop-blur-xl p-6 md:p-8 rounded-3xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-purple-100 text-center flex flex-col items-center">
                        <div className="w-16 h-16 md:w-20 md:h-20 bg-purple-50 rounded-2xl flex items-center justify-center text-4xl md:text-5xl mb-6 shadow-inner">
                            💛
                        </div>
                        <h3 className="text-xl font-bold text-purple-700">Verified & Safe</h3>
                        <p className="text-gray-600 mt-3 text-sm md:text-base leading-relaxed">
                            All pets come from trusted owners, shelters, and foster homes with full history.
                        </p>
                    </div>

                    {/* Card 3 - sm:col-span-2 lg:col-span-1  */}
                    <div className="sm:col-span-2 lg:col-span-1 bg-white/70 backdrop-blur-xl p-6 md:p-8 rounded-3xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-purple-100 text-center flex flex-col items-center">
                        <div className="w-16 h-16 md:w-20 md:h-20 bg-indigo-50 rounded-2xl flex items-center justify-center text-4xl md:text-5xl mb-6 shadow-inner">
                            🏡
                        </div>
                        <h3 className="text-xl font-bold text-purple-700">Build a Family</h3>
                        <p className="text-gray-600 mt-3 text-sm md:text-base leading-relaxed">
                            Pets bring joy, love, and emotional support into your home and family life.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhyAdopt;