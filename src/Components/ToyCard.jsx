import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router';

const ToyCard = ({ item }) => {
    const { description, price, toyId } = item;
    return (
        <div className="card bg-base-100  shadow-sm hover:scale-105 ease-in-out transition">
            <figure>
                <img className='h-[150px]'
                    src={item.image} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{item.name}
                </h2>
                <p>{description}</p>
                <div className="flex items-center text-center   gap-1 text-orange-400 border-b border-base-400 pb-3">
                    <div className='flex items-center '>
                        <p className='ml-5  text-black'>Price: <span className='font-bold'>{price}</span> </p>
                    </div>
                </div>
                <div className="card-actions justify-center">
                    <Link to={`/toy-details/${toyId}`} className='btn px-3 py-2 hover:bg-yellow-400'>View More</Link>
                </div>
            </div>
        </div>
    );
};

export default ToyCard;