const PetHeroes = () => {
    const heroes = [
        {
            name: "Rifat Hasan",
            story: "Adopted a rescued Golden Retriever and gave him a forever home.",
            image: "https://i.ibb.co.com/7tDH5HpR/best.jpg"
        },
        {
            name: "Sara Ahmed",
            story: "Cares for abandoned kittens and helps them find loving families.",
            image: "https://i.ibb.co.com/Kcy45XFZ/sara-khan.webp"
        },
        {
            name: "Nusrat Jahan",
            story: "Adopted a disabled puppy and proved love has no limits.",
            image: "https://i.ibb.co.com/Y7JmmWcZ/nusrat.webp"
        },
    ];

    return (
        <section className="relative py-24 bg-gradient-to-b from-white to-purple-50 overflow-hidden">

            {/* Decorative Paw Icons */}
            <div className="absolute top-10 right-20 text-purple-200 text-7xl opacity-20">🐾</div>
            <div className="absolute bottom-10 left-20 text-pink-200 text-7xl opacity-20">🐾</div>

            <div className="max-w-6xl mx-auto px-6 text-center">

                {/* Section Title */}
                <h2 className="text-3xl md:text-3xl border-red-200 font-extrabold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent drop-shadow-md">
                    Meet Our Pet Heroes
                    <hr className="border-b mt-2 w-[400px] mx-auto border-red-300" />
                </h2>

                <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
                    These amazing humans opened their hearts and homes to pets in need.
                    Their compassion inspires our entire PawMart community. ❤️
                </p>

                {/* Cards */}
                <div className="mt-16 grid md:grid-cols-3 gap-10">

                    {heroes.map((hero, index) => (
                        <div
                            key={index}
                            className="relative bg-white/70 backdrop-blur-xl border border-purple-100 shadow-xl rounded-3xl p-6 hover:scale-105 transition duration-300"
                        >
                            {/* Image */}
                            <img
                                src={hero.image}
                                alt={hero.name}
                                className="w-32 h-32 object-cover rounded-full mx-auto shadow-md border-4 border-pink-200"
                            />

                            <h3 className="mt-6 text-xl font-semibold text-purple-700">
                                {hero.name}
                            </h3>

                            <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                                {hero.story}
                            </p>

                            {/* Floating Paw */}
                            <span className="absolute -top-5 -right-5 text-4xl text-pink-300 opacity-70">
                                🐶
                            </span>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default PetHeroes;
