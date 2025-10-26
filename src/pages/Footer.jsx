import React from 'react';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-slate-100">
            <div className="max-w-7xl mx-auto px-6 py-3">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="space-y-4">
                        <h3 className="text-2xl font-extrabold tracking-tight">Toy Topia</h3>
                        <p className="text-slate-300 leading-relaxed">
                            Delightful products and services built with care. Subscribe for updates,
                            new features, promotions and more.
                        </p>

                        <form className="flex w-full max-w-md" onSubmit={(e) => e.preventDefault()}>
                            <label htmlFor="footer-email" className="sr-only">Email address</label>
                            <input
                                id="footer-email"
                                type="email"
                                placeholder="Your email"
                                required
                                className="flex-1 px-4 py-2 rounded-l-lg bg-white/5 placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                            />
                            <button
                                type="submit"
                                className="px-4 py-2 rounded-r-lg bg-emerald-500 text-white font-semibold hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-300"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 md:col-span-2">
                        <div>
                            <h4 className="text-slate-200 font-semibold mb-3">Company</h4>
                            <ul className="space-y-2 text-slate-300">
                                <li><a href="/about" className="hover:text-white">About</a></li>
                                <li><a href="/careers" className="hover:text-white">Careers</a></li>
                                <li><a href="/press" className="hover:text-white">Press</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-slate-200 font-semibold mb-3">Legal</h4>
                            <ul className="space-y-2 text-slate-300">
                                <li><a href="/terms" className="hover:text-white">Terms &amp; Conditions</a></li>
                                <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
                                <li><a href="/cookie-policy" className="hover:text-white">Cookie Policy</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-slate-200 font-semibold mb-3">Support</h4>
                            <ul className="space-y-2 text-slate-300">
                                <li><a href="/help" className="hover:text-white">Help Center</a></li>
                                <li><a href="/contact" className="hover:text-white">Contact</a></li>
                                <li><a href="/status" className="hover:text-white">System Status</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <hr className="mt-2 border-slate-700" />

                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-slate-400 text-sm">© {year} Toy Topia. All rights reserved.</p>

                    <div className="flex items-center gap-6">
                        <nav aria-label="Social media links" className="flex items-center gap-3">
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="p-2 rounded-md bg-white/3 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-emerald-400">
                                <FaTwitter size={18} />
                            </a>
                            <a href="https://web.facebook.com/?_rdc=1&_rdr#" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="p-2 rounded-md bg-white/3 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-emerald-400">
                                <FaFacebookF size={18} />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-2 rounded-md bg-white/3 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-emerald-400">
                                <FaInstagram size={18} />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2 rounded-md bg-white/3 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-emerald-400">
                                <FaLinkedinIn size={18} />
                            </a>

                        </nav>


                    </div>
                </div>
            </div>
        </footer>
    );
}
