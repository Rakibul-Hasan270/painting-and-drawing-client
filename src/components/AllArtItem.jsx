import React from 'react';
import { Link, useLoaderData } from 'react-router';

const AllArtItem = () => {
    const loadedProduct = useLoaderData();

    return (
        <div className='max-w-6xl mx-auto mt-10'>

            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Craft Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Rating</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            loadedProduct.map(product =>
                                <tr key={product._id}>
                                    <th>{product.item_name}</th>
                                    <td>{product.subcategory_name}</td>
                                    <td>{product.price}</td>
                                    <td>{product.rating}</td>
                                    <td><Link to={`/itemDetail/${product._id}`}><button className='btn'>View Detail</button></Link></td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>






        </div>
    );
};

export default AllArtItem;