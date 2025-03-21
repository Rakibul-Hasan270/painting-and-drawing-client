import React from 'react';
import { useLoaderData } from 'react-router';

const AllArtItem = () => {
    const loadedProduct = useLoaderData();
    return (
        <div className='max-w-6xl mx-auto mt-10'>
            {/* const product = { image, item_name, subcategory_name, description, price, rating, processing_time, user_email, user_name }; */}

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
                                    <td><button className='btn'>View Detail</button></td>
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