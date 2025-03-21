import React from 'react';
import { Link } from 'react-router';

const ProductList = ({ product }) => {
    const { image, item_name, subcategory_name, description, price, rating, _id } = product;
    const handelViewDetails = id => {
        console.log(id)
    }
    return (
        <div className="bg-white border border-gray-200 shadow-md rounded-lg overflow-hidden w-full sm:w-[320px] transition-transform transform hover:scale-105 hover:shadow-lg">
            {/* Product Image */}
            <img src={image} alt={item_name} className="w-full h-52 object-cover" />

            {/* Product Details */}
            <div className="p-5">
                <h2 className="text-lg font-bold text-gray-800">{item_name}</h2>
                <p className="text-sm text-gray-500">{subcategory_name}</p>
                <div className="flex justify-between items-center mt-2">
                    <p className="text-lg font-bold text-blue-600">${price}</p>
                    <p className="text-sm text-yellow-500 font-semibold">⭐ {rating} / 5</p>
                </div>

                <p className="text-gray-700 text-sm mt-3">
                    {description.length > 80 ? description.substring(0, 80) + "..." : description}
                </p>

                {/* View Details Button */}
                <Link to={`/productDetails/${_id}`}>
                    <button onClick={() => handelViewDetails(_id)} className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
                        View Details
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ProductList;