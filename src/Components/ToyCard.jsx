import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router';

const ToyCard = ({ item }) => {
    const { rating, description, price, toyId } = item;
    return (
        <div className="card bg-base-100  shadow-sm">
            <figure>
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{item.toyName}
                    <div className="badge badge-secondary">{rating.badge}</div>
                </h2>
                <p>{description}</p>
                <div className="flex items-center text-center   gap-1 text-orange-400 border-b border-base-400 pb-3">
                    {Array.from({ length: rating.number }).map((_, i) => (
                        <FaStar key={i} />
                    ))}
                    <div className='flex items-center '>
                        <span className="ml-2 text-gray-600">{rating.number}</span>
                        <p className='ml-5  text-black'>Price: <span className='font-bold'>{price}</span> </p>
                    </div>
                </div>
                <div className="card-actions justify-center">
                    <Link to={`/toy-details/${toyId}`} className='btn px-3 py-2 hover:bg-yellow-400'>View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default ToyCard;