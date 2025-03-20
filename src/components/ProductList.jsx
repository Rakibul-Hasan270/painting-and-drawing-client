import React, { useEffect, useState } from "react";

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://your-api.com/api/products")  // Backend থেকে Product Data আনবে
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-3xl font-bold text-center mb-6">Our Arts & Crafts</h2>

            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div key={product._id} className="bg-white p-4 shadow-lg rounded-lg hover:shadow-2xl transition">
                        <img src={product.image} alt={product.name} className="w-full h-60 object-cover rounded-lg mb-3" />
                        <h3 className="text-lg font-semibold">{product.name}</h3>
                        <p className="text-gray-600">${product.price}</p>
                        <button className="mt-3 w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded">
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
