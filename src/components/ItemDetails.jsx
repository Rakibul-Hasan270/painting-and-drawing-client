import React from 'react';
import { Link, useLoaderData } from 'react-router';

const ItemDetails = () => {
    const loadedItem = useLoaderData();
    console.log(loadedItem);
    const { image, item_name, subcategory_name, description, price, rating, processing_time, user_email, user_name } = loadedItem;
    return (
        <div className="max-w-lg mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl">
            {/* Image Section */}
            <div className="relative">
                <img
                    src={image || "https://via.placeholder.com/400"}
                    alt={item_name}
                    className="w-full h-64 object-cover sm:h-80"
                />
                <span className="absolute top-4 right-4 bg-green-600 text-white text-sm px-4 py-1 rounded-full shadow-md">
                    ${price}
                </span>
            </div>

            {/* Content Section */}
            <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900">{item_name}</h2>
                <p className="text-gray-600 mt-2">{description}</p>

                {/* Item Details */}
                <div className="mt-4 space-y-3">
                    <p className="text-gray-800 font-medium">
                        <span className="font-semibold">Processing Time:</span> {processing_time} days
                    </p>
                    <p className="text-yellow-500 font-semibold">
                        ⭐ {rating}/5 Rating
                    </p>
                    <span className="inline-block bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full font-medium">
                        {subcategory_name}
                    </span>
                </div>

                {/* Seller Info */}
                <div className='flex justify-between'>
                <div className="mt-6 p-4 bg-gray-50 border-t border-gray-200 rounded-lg">
                    <h3 className="text-gray-900 font-semibold">Seller Information</h3>
                    <p className="text-gray-700">{user_name}</p>
                    <p className="text-gray-500 text-sm">{user_email}</p>
                </div>
                <Link><button className='btn'>Add To Cart</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ItemDetails;