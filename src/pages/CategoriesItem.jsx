import React, { useEffect, useState } from 'react';
import ToyCard from '../Components/ToyCard';


const CategoriesItem = () => {
    const [services, setServices] = useState([])
    const [category, setCategory] = useState('')

    useEffect(() => {
        fetch(`http://localhost:3000/services?category=${category}`)
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(err => {
                console.log(err)
            })
    }, [category])
    console.log(category)

    console.log(services)

    return (
        <div className=''>
            <select onChange={(e) => setCategory(e.target.value)} defaultValue="Choose Category" className="select mb-3">
                <option value="">Choose Category</option>
                <option value="Pets">Pets</option>
                <option value="Food">Food</option>
                <option value="Accessories">Accessories</option>
                <option value="Care Products">Care Products</option>
            </select>
            <h2 className="font-bold mb-5">
                Total <span className="text-secondary">{services.length}</span>
                Found
            </h2>

            <div className='grid lg:grid-cols-3  md:grid-cols-2 gap-5'>
                {
                    services.map(item => <ToyCard key={services._id} item={item}></ToyCard>)
                }
            </div>
        </div>
    );
};

export default CategoriesItem;