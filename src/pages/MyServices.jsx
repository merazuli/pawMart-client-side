import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Link } from 'react-router';
import axios from 'axios';

const MyServices = () => {
    const [myServices, setMyServices] = useState([]);
    const { user } = useContext(AuthContext);
    console.log(myServices)
    console.log(user)

    useEffect(() => {
        fetch(`http://localhost:3000/my-services?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setMyServices(data)
            }
            )
            .catch(err => {
                console.log(err)
            })
    }, [user?.email])

    // handle delete 
    const handleDelete = (id) => {
        axios.delete(`http://localhost:3000/delete/${id}`)
            .then(res => {
                console.log(res.data)

                const filterData = myServices.filter(service => service._id != id);
                setMyServices(filterData)
            })
            .catch(err => {
                console.log(err)
            });
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            myServices?.map((service, index) => <tr key={index}>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={service?.image} />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{service?.name}</div>
                                            <div className="text-sm opacity-50"></div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p>{service?.description}</p>
                                </td>
                                <td>{service?.price}</td>
                                <td className='flex gap-3'>
                                    <button onClick={() => handleDelete(service._id)} className="btn btn-error text-white btn-xs">
                                        Delete
                                    </button>

                                    <Link to={`/update-services/${service?._id}`}> <button className="btn btn-primary btn-xs">Edit</button></Link>
                                </td>
                            </tr>
                            )
                        }

                    </tbody>
                    {/* foot */}

                </table>
            </div>
        </div>
    );
};

export default MyServices;