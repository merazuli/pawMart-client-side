import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import ToyCard from '../Components/toyCard';

const CategoriesItem = () => {
    const { id } = useParams();
    const data = useLoaderData();

    const [categoryItems, setCategoryItems] = useState([])

    // filtered data for use useeffect 
    useEffect(() => {
        if (id == 0) {
            setCategoryItems(data)
        } else {

            const filteredItems = data.filter(items => items.categoryId == id);
            setCategoryItems(filteredItems)
        }
        // console.log(filteredItems)

    }, [data, id])

    // console.log(categoryItems)
    return (
        <div className=''>
            <h2 className="font-bold mb-5">
                Total <span className="text-secondary">{categoryItems.length}</span> news
                Found
            </h2>

            <div className='grid lg:grid-cols-3  md:grid-cols-2 gap-2'>
                {
                    categoryItems.map(item => <ToyCard key={item.toyId} item={item}></ToyCard>)
                }
            </div>
        </div>
    );
};

export default CategoriesItem;