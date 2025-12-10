const WhyAdopt = () => {
    return (
        <section className="relative py-20 bg-gradient-to-b from-purple-50 to-white overflow-hidden">

            {/* Decorative Paw Icons */}
            <div className="absolute top-10 left-10 text-pink-300 text-6xl opacity-20">🐾</div>
            <div className="absolute bottom-10 right-10 text-purple-300 text-6xl opacity-20">🐾</div>

            <div className="max-w-5xl mx-auto text-center px-6">

                {/* Title */}
                <h2 className="text-4xl md:text-3xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
                    Why Adopt from PawMart?
                    <hr className="border-b mt-2 w-[500px] mx-auto border-red-300" />
                </h2>

                <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
                    Adopting a pet not only gives a homeless animal a loving family but also
                    creates space for another rescue. PawMart ensures safe, verified,
                    and responsible adoptions for a brighter future. 💛
                </p>

                {/* Benefit Cards */}
                <div className="mt-14 grid md:grid-cols-3 gap-8">

                    {/* Card 1 */}
                    <div className="bg-white/70 backdrop-blur-xl p-8 rounded-2xl shadow-lg hover:scale-105 transition duration-300 border border-purple-100 text-center">
                        <div className="text-5xl mb-4">🐶</div>
                        <h3 className="text-xl font-semibold text-purple-700">Save a Life</h3>
                        <p className="text-gray-600 mt-2">
                            Every adoption gives a rescued pet a second chance at life.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white/70 backdrop-blur-xl p-8 rounded-2xl shadow-lg hover:scale-105 transition duration-300 border border-purple-100 text-center">
                        <div className="text-5xl mb-4">💛</div>
                        <h3 className="text-xl font-semibold text-purple-700">Verified & Safe</h3>
                        <p className="text-gray-600 mt-2">
                            All pets come from trusted owners, shelters, and foster homes.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white/70 backdrop-blur-xl p-8 rounded-2xl shadow-lg hover:scale-105 transition duration-300 border border-purple-100 text-center">
                        <div className="text-5xl mb-4">🏡</div>
                        <h3 className="text-xl font-semibold text-purple-700">Build a Family</h3>
                        <p className="text-gray-600 mt-2">
                            Pets bring joy, love, and emotional support into your home.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhyAdopt;
