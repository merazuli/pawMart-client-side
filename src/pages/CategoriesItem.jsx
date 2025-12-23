import React, { useEffect, useState } from 'react';
import ToyCard from '../Components/ToyCard';
import WhyAdopt from '../Components/WhyAdapt';
import PetHeroes from '../Components/PetHeroes';

const CategoriesItem = () => {
    const [services, setServices] = useState([]);
    const [category, setCategory] = useState('');
    const [loading, setLoading] = useState(true);

    const categories = [
        { name: 'All Products', value: '' },
        { name: 'Pets', value: 'Pets' },
        { name: 'Food', value: 'Food' },
        { name: 'Accessories', value: 'Accessories' },
        { name: 'Care Products', value: 'Care Products' },
    ];

    useEffect(() => {
        setLoading(true);
        fetch(`https://missionscic10-xi.vercel.app/services?category=${category}`)
            .then(res => res.json())
            .then(data => {
                setServices(data);
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
                setLoading(false);
            });
    }, [category]);

    return (
        <div className='max-w-7xl mx-auto px-4 py-10'>
            {/* Title Section */}
            <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2 italic">Browse by Category</h2>
                <div className="w-24 h-1 bg-purple-500 mx-auto rounded-full"></div>
            </div>

            {/* Filter Tabs - Responsive Horizontal Scroll for Mobile */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
                {categories.map((cat) => (
                    <button
                        key={cat.name}
                        onClick={() => setCategory(cat.value)}
                        className={`px-6 py-2 rounded-full font-medium transition-all duration-300 border ${category === cat.value
                            ? 'bg-purple-600 text-white border-purple-600 shadow-lg shadow-purple-200 scale-105'
                            : 'bg-white text-gray-600 border-gray-200 hover:border-purple-400 hover:text-purple-500'
                            }`}
                    >
                        {cat.name}
                    </button>
                ))}
            </div>

            {/* Status Bar */}
            <div className="flex items-center justify-between mb-6 border-b pb-4">
                <p className="text-gray-500 font-medium">
                    Showing <span className="text-purple-600 font-bold">{services.length}</span> items
                </p>
                <div className="hidden md:block text-sm text-gray-400 italic">
                    Quality products for your furry friends 🐾
                </div>
            </div>

            {/* Content Section */}
            {loading ? (
                <div className="flex flex-col items-center justify-center min-h-[300px]">
                    <span className="loading loading-spinner text-purple-600 loading-lg"></span>
                    <p className="mt-4 text-gray-500 animate-pulse">Fetching your products...</p>
                </div>
            ) : (
                <>
                    {services.length > 0 ? (
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
                            {services.map(item => (
                                <div key={item._id} className="transform hover:-translate-y-2 transition-transform duration-300">
                                    <ToyCard item={item} />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
                            <p className="text-xl text-gray-400">No products found in this category.</p>
                        </div>
                    )}
                </>
            )}

            {/* Decorative Section Dividers */}
            <div className="mt-20 space-y-20">
                <div className="bg-purple-50 rounded-[40px] p-2 md:p-10 shadow-inner">
                    <WhyAdopt />
                </div>
                <PetHeroes />
            </div>
        </div>
    );
};

export default CategoriesItem;