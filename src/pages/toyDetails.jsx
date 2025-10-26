import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import Navbar from '../Components/Navbar';
import RightSide from '../Components/RightSide';
import ToyDetailsCard from '../Components/ToyDetailsCard';

const ToyDetails = () => {
    const data = useLoaderData();
    const { id } = useParams();

    const [toy, setToy] = useState([]);

    console.log(toy)

    useEffect(() => {
        const filteredData = data.filter(singleData => singleData.toyId == id)
        setToy(filteredData)

    }, [data, id])

    return (
        <div className=''>
            <Navbar></Navbar>
            <div className='grid grid-cols-12 w-11/12 mx-auto'>
                <main className='col-span-9'>
                    <ToyDetailsCard toy={toy}></ToyDetailsCard>
                </main>
                <aside className='col-span-3'>
                    <RightSide></RightSide>
                </aside>
            </div>
        </div>
    );
};

export default ToyDetails;