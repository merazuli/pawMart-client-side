import React from 'react';

const Footer = () => {
    return (
        <footer className="relative mt-10 bg-gradient-to-br from-[#1e1b4b] via-[#312e81] to-[#4c1d95] text-white pt-12 pb-6 overflow-hidden">

            {/* Decorative Paw Background - select-none যোগ করা হয়েছে যাতে ড্র্যাগ না হয় */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://i.ibb.co/3WymJ5J/paw-bg.png')] bg-cover pointer-events-none"></div>

            <div className="relative container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 z-10 text-center sm:text-left">

                {/* Brand */}
                <div className="flex flex-col items-center sm:items-start">
                    <h1 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-pink-400 to-yellow-300 bg-clip-text text-transparent drop-shadow-md">
                        PawMART
                    </h1>
                    <p className="mt-4 text-sm opacity-90 leading-relaxed max-w-xs">
                        PawMart connects local pet owners and buyers for adoption
                        and essential pet care products. Your trusted hub for furry friends! 🐾
                    </p>
                </div>

                {/* Useful Links */}
                <div className="flex flex-col items-center sm:items-start">
                    <h2 className="text-lg md:text-xl font-semibold mb-4 relative w-max">
                        Useful Links
                        <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-pink-400 rounded"></span>
                    </h2>
                    <ul className="space-y-2 opacity-90">
                        <li><a href="/" className="hover:text-yellow-300 transition-all duration-300">Home</a></li>
                        <li><a href="/contact" className="hover:text-yellow-300 transition-all duration-300">Contact</a></li>
                        <li><a href="/terms" className="hover:text-yellow-300 transition-all duration-300">Terms & Conditions</a></li>
                    </ul>
                </div>

                {/* Categories */}
                <div className="flex flex-col items-center sm:items-start">
                    <h2 className="text-lg md:text-xl font-semibold mb-4 relative w-max">
                        Categories
                        <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-pink-400 rounded"></span>
                    </h2>
                    <ul className="space-y-2 opacity-90">
                        <li className="hover:translate-x-1 transition-transform cursor-pointer">Pets</li>
                        <li className="hover:translate-x-1 transition-transform cursor-pointer">Food</li>
                        <li className="hover:translate-x-1 transition-transform cursor-pointer">Accessories</li>
                        <li className="hover:translate-x-1 transition-transform cursor-pointer">Care Products</li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div className="flex flex-col items-center sm:items-start">
                    <h2 className="text-lg md:text-xl font-semibold mb-4 relative w-max">
                        Stay Updated
                        <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-pink-400 rounded"></span>
                    </h2>
                    <p className="text-sm opacity-80 mb-4">
                        Subscribe to get updates on new pets, offers and tips.
                    </p>

                    <div className="flex w-full max-w-sm">
                        <input
                            type="email"
                            placeholder="Enter email"
                            className="px-4 py-2 w-full text-gray-800 rounded-l-xl outline-none focus:ring-2 focus:ring-pink-400 transition-all"
                        />
                        <button className="bg-pink-500 px-5 rounded-r-xl font-bold hover:bg-pink-600 transition-all active:scale-95">
                            Go
                        </button>
                    </div>

                    {/* Social Icons */}
                    <div className="flex gap-5 mt-6 text-2xl">
                        <a href="#" className="hover:text-yellow-300 hover:-translate-y-1 transition-all duration-300">
                            <i className="fa-brands fa-facebook"></i>
                        </a>
                        <a href="#" className="hover:text-yellow-300 hover:-translate-y-1 transition-all duration-300">
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                        <a href="#" className="hover:text-yellow-300 hover:-translate-y-1 transition-all duration-300">
                            <i className="fa-brands fa-twitter"></i>
                        </a>
                        <a href="#" className="hover:text-yellow-300 hover:-translate-y-1 transition-all duration-300">
                            <i className="fa-brands fa-youtube"></i>
                        </a>
                    </div>
                </div>

            </div>

            {/* Bottom Line */}
            <div className="relative border-t border-white/10 mt-12 pt-6 text-center z-10">
                <p className="text-xs md:text-sm opacity-60 tracking-wide">
                    © {new Date().getFullYear()} <span className="font-bold text-pink-300">PawMart</span> — Built with ❤️ for Pet Lovers.
                </p>
            </div>
        </footer>
    );
};

export default Footer;