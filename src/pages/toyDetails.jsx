import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import Navbar from '../Components/Navbar';
import RightSide from '../Components/RightSide';
import ToyDetailsCard from '../Components/ToyDetailsCard';

const ToyDetails = () => {
    const data = useLoaderData();
    const { id } = useParams();

    const [toy, setToy] = useState([]);

    // console.log(toy)

    useEffect(() => {
        const filteredData = data.find(singleData => singleData.toyId == id)
        setToy(filteredData)

    }, [data, id])

    return (
        <div className=''>
            <title>ToyTopia – Details</title>
            <Navbar></Navbar>
            <div className='grid grid-cols-12 w-11/12 mx-auto gap-10 '>
                <main className='lg:col-span-9 col-span-12 '>
                    <h1 className='text-xl font-bold text-center my-5'>Toy Item</h1>
                    <ToyDetailsCard toy={toy}></ToyDetailsCard>
                </main>
                <aside className='lg:col-span-3 col-span-12'>
                    <RightSide></RightSide>
                </aside>
            </div>
        </div>
    );
};

export default ToyDetails;