import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router';

const ToyDetailsCard = ({ toy }) => {
    const { rating = {}, description, price, toyId, sellerName, sellerEmail, categoryId } = toy;
    // const { number, badge } = rating;
    // console.log(number)
    return (
        <div className="card bg-base-100  shadow-sm">
            <figure>
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title justify-center">{toy.toyName}
                    <div className="badge badge-secondary">{rating.badge}</div>
                </h2>

                <div className='w-8/12 mx-auto'>
                    <div className='flex justify-between '>
                        <div className='flex items-center text-xl gap-5'>
                            <FaStar className='text-yellow-400'></FaStar>
                            <p>Ratings: {rating.number}</p>
                        </div>
                        <div className=' '>
                            <p className='text-xl '>Price: {price}</p>
                        </div>
                    </div>
                    <p><span className='font-bold mr-5'>Description:</span> {description}</p>
                </div>


                <div className='w-8/12 mx-auto flex justify-between'>
                    <p >Seller-Name: <span className='font-bold'>{sellerName}</span></p>
                    <p >Seller-Email <span className='font-bold'>{sellerEmail}</span></p>

                </div>
                <div className="card-actions justify-center">
                    <Link to={`/category/${toy.categoryId}`} className='btn px-3 py-2 hover:bg-yellow-400'>Back To Category</Link>
                </div>
            </div>
        </div>
    );
};

export default ToyDetailsCard;