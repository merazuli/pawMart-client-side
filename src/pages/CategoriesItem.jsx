import React, { useEffect, useState } from 'react';
import ToyCard from '../Components/ToyCard';
import WhyAdopt from '../Components/WhyAdapt';
import PetHeroes from '../Components/PetHeroes';


const CategoriesItem = () => {
    const [services, setServices] = useState([])
    const [category, setCategory] = useState('')
    const [loading, setLoading] = useState(true)
    console.log(services)

    useEffect(() => {
        fetch(`https://missionscic10-xi.vercel.app/services?category=${category}`)
            .then(res => res.json())
            .then(data => {
                setServices(data)
                setLoading(false)
            })

            .catch(err => {
                console.log(err)
            })
    }, [category])
    // console.log(category)
    if (loading) {
        return <span className="loading loading-spinner text-green-500 loading-lg w-[100px] text-center mt-20"></span>
    }
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
                Total Found :<span className="text-secondary">({services.length})</span>

            </h2>

            <div className='grid lg:grid-cols-3  md:grid-cols-2 gap-5'>
                {
                    services.map(item => <ToyCard key={item._id} item={item}></ToyCard>)
                }
            </div>
            <WhyAdopt></WhyAdopt>
            <PetHeroes></PetHeroes>
        </div>
    );
};

export default CategoriesItem;