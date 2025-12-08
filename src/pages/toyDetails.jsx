import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Navbar from '../Components/Navbar';


const ToyDetails = () => {
    const { id } = useParams();
    const [services, setServices] = useState([])
    const [loading, setLoading] = useState(true)

    console.log(services)

    // console.log(toy)
    useEffect(() => {
        fetch(`http://localhost:3000/services/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setServices(data)
                setLoading(false)
            })
            .catch(err => console.log(err))
    }, [id])

    if (loading) {
        <span className="loading loading-spinner loading-xl"></span>
    }
    return (
        <div>

            <Navbar></Navbar>
            <div className="max-w-3xl mx-auto">
                <div className="mt-5 bg-gradient-to-br mb-5 from-pink-50 via-purple-50 to-blue-50 shadow-lg rounded-2xl overflow-hidden border border-purple-100 hover:shadow-2xl transition-all duration-300">
                    {/* Image */}
                    <figure className="relative">
                        <img
                            src={services?.image}
                            alt=""
                            className="w-full h-72 object-cover"
                        />

                    </figure>

                    {/* Body */}
                    <div className="p-6 space-y-5">
                        <h2 className="text-3xl font-bold text-center text-purple-700">
                            {services?.name}
                        </h2>

                        {/* Info Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-gray-700 text-center">

                            <div className="flex flex-col items-center">
                                <p className="font-medium">Price</p>
                                <p className="text-yellow-800 font-semibold bg-yellow-100 px-3 py-1 rounded-lg shadow-sm">
                                    ${services?.price}
                                </p>
                            </div>

                        </div>

                        {/* Description */}
                        <p className="text-gray-600 leading-relaxed text-justify">
                            <span className="font-semibold text-purple-700">Description:</span>{" "}
                            {services?.description || "No description available."}
                        </p>



                        {/* Back Button */}
                        <div className="flex justify-center pt-4">
                            {/* <Link
                            to={`/category/${categoryId}`}
                            className="btn bg-gradient-to-r from-purple-500 to-pink-500 text-white border-none hover:scale-105 transition-transform duration-300 px-6 py-2 rounded-full shadow-md"
                        >
                            Back To Category
                        </Link> */}
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default ToyDetails;