import React, { useEffect, useState } from 'react';
import ToyCard from '../Components/toyCard';

const CategoriesItem = () => {
    const [services, setServices] = useState([])

    // filtered data for use useeffect 
    // useEffect(() => {
    //     if (id == 0) {
    //         setCategoryItems(data)
    //     } else {

    //         const filteredItems = data.filter(items => items.categoryId == id);
    //         setCategoryItems(filteredItems)
    //     }
    //     // console.log(filteredItems)

    // }, [data, id])

    // console.log(categoryItems)
    useEffect(() => {
        fetch('http://localhost:3000/services')
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(err => {
                console.log(err)
            })
    }, [])

    console.log(services)

    return (
        <div className=''>
            <h2 className="font-bold mb-5">
                Total <span className="text-secondary">{services.length}</span> news
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