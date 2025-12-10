const Footer = () => {
    return (
        <footer className="relative mt-10 bg-gradient-to-br from-[#1e1b4b] via-[#312e81] to-[#4c1d95] text-white pt-10 pb-6 overflow-hidden">

            {/* Decorative Paw Background */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://i.ibb.co/3WymJ5J/paw-bg.png')] bg-cover"></div>

            <div className="relative container mx-auto px-6 grid md:grid-cols-4 gap-8 z-10">

                {/* Brand */}
                <div>
                    <h1 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-pink-400 to-yellow-300 bg-clip-text text-transparent drop-shadow-md">
                        PawMART
                    </h1>
                    <p className="mt-3 text-sm opacity-90 leading-relaxed">
                        PawMart connects local pet owners and buyers for adoption
                        and essential pet care products. Your trusted hub for furry friends! 🐾
                    </p>
                </div>

                {/* Links */}
                <div>
                    <h2 className="text-lg md:text-xl font-semibold mb-3 relative w-max">
                        Useful Links
                        <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-pink-400 rounded"></span>
                    </h2>
                    <ul className="space-y-1 opacity-90">
                        <li><a href="/" className="hover:text-yellow-300 transition">Home</a></li>
                        <li><a href="/contact" className="hover:text-yellow-300 transition">Contact</a></li>
                        <li><a href="/terms" className="hover:text-yellow-300 transition">Terms & Conditions</a></li>
                    </ul>
                </div>

                {/* Categories */}
                <div>
                    <h2 className="text-lg md:text-xl font-semibold mb-3 relative w-max">
                        Categories
                        <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-pink-400 rounded"></span>
                    </h2>
                    <ul className="space-y-1 opacity-90">
                        <li>Pets</li>
                        <li>Food</li>
                        <li>Accessories</li>
                        <li>Care Products</li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h2 className="text-lg md:text-xl font-semibold mb-3 relative w-max">
                        Stay Updated
                        <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-pink-400 rounded"></span>
                    </h2>
                    <p className="text-sm opacity-80">
                        Subscribe to get updates on new pets, offers and tips.
                    </p>

                    <div className="mt-3 flex text-white">
                        <input
                            type="email"
                            placeholder="Enter email"
                            className="px-3 py-2 w-full text-white rounded-l-md border-2 border-red-500"
                        />
                        <button className="bg-pink-500 px-4 rounded-r-md hover:bg-pink-400 transition">
                            Go
                        </button>
                    </div>

                    <div className="flex gap-3 mt-4 text-2xl">
                        <a className="hover:text-yellow-300 transition">
                            <i className="fa-brands fa-facebook"></i>
                        </a>
                        <a className="hover:text-yellow-300 transition">
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                        <a className="hover:text-yellow-300 transition">
                            <i className="fa-brands fa-twitter"></i>
                        </a>
                        <a className="hover:text-yellow-300 transition">
                            <i className="fa-brands fa-youtube"></i>
                        </a>
                    </div>
                </div>

            </div>

            {/* Bottom Line */}
            <div className="relative border-t border-white/20 mt-10 pt-3 text-center z-10">
                <p className="text-sm opacity-70">
                    © {new Date().getFullYear()} PawMart — All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
