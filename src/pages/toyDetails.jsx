import React from 'react';
import ToyCard from '../Components/toyCard';
import { useLoaderData } from 'react-router';

const toyDetails = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div>

        </div>
    );
};

export default toyDetails;