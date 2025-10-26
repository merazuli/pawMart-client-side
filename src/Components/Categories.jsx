import React, { use } from 'react';
import { NavLink } from 'react-router';


const categoryPromise = fetch("/categories.json")
    .then(res => res.json())
const Categories = () => {
    const categories = use(categoryPromise);
    // console.log(categories)
    return (
        <div className='grid grid-cols-1 gap-6 mt-5'>
            {
                categories.map(category => <NavLink to={`/category/${category.categoryId}`} key={category.categoryId} className="btn btn-outline border-0 bg-base-300 hover:scale-105 ">{category.categoryName}</NavLink>)
            }
        </div >
    );
};

export default Categories;