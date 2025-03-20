

const AddCraftList = () => {

    const handelFormSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const image = form.image.value;
        const item_name = form.item_name.value;
        const subcategory_name = form.subcategory_name.value;
        const description = form.description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const processing_time = form.processing_time.value;
        const user_email = form.user_email.value;
        const user_name = form.user_name.value;


        // console.log(image, item_name, subcategory_name, description, price, rating, processing_time, user_email, user_name)

        const product = { image, item_name, subcategory_name, description, price, rating, processing_time, user_email, user_name };

        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }

    return (
        <div className="max-w-4xl mx-auto shadow-xl rounded-lg p-8 mt-10">
            <h2 className="text-2xl font-bold mb-12 text-center">
                Add New Craft Product
            </h2>
            <form onSubmit={handelFormSubmit} className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {/* Image URL */}
                <label className="form-group">
                    <span>Image URL:</span>
                    <input type="url" name="image" className="input-field" placeholder="Enter Image URL" required />
                </label>

                {/* Item Name */}
                <label className="form-group">
                    <span>Item Name:</span>
                    <input type="text" name="item_name" className="input-field" placeholder="Enter Item Name" required />
                </label>

                {/* Subcategory Name */}
                <label className="form-group">
                    <span>Subcategory Name:</span>
                    <input type="text" name="subcategory_name" className="input-field" placeholder="Enter Subcategory" required />
                </label>

                {/* Short Description (Full Width) */}
                <label className="form-group col-span-1 sm:col-span-1 md:col-span-2 lg:col-span-3">
                    <span>Short Description:</span>
                    <textarea name="description" className="input-field h-24" placeholder="Enter Short Description" required />
                </label>

                {/* Price */}
                <label className="form-group">
                    <span>Price ($):</span>
                    <input type="number" name="price" className="input-field" placeholder="Enter Price" required />
                </label>

                {/* Rating */}
                <label className="form-group">
                    <span>Rating (1-5):</span>
                    <input type="number" name="rating" className="input-field" placeholder="Enter Rating" min="1" max="5" step="0.1" required />
                </label>

                {/* Customization */}
                <label className="form-group">
                    <span>Customization:</span>
                    <select name="customization" className="input-field" required>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </label>

                {/* Processing Time */}
                <label className="form-group">
                    <span>Processing Time (days):</span>
                    <input type="number" name="processing_time" className="input-field" placeholder="Enter Processing Time" required />
                </label>

                {/* Stock Status */}
                {/* <label className="form-group">
                    <span>Stock Status:</span>
                    <select name="stock_status" className="input-field" required>
                        <option value="In Stock">In Stock</option>
                        <option value="Made to Order">Made to Order</option>
                    </select>
                </label> */}

                {/* User Email */}
                <label className="form-group">
                    <span>User Email:</span>
                    <input type="email" name="user_email" className="input-field" placeholder="Enter Your Email" required />
                </label>

                {/* User Name */}
                <label className="form-group">
                    <span>User Name:</span>
                    <input type="text" name="user_name" className="input-field" placeholder="Enter Your Name" required />
                </label>

                {/* Submit Button (Full Width) */}
                <div className="col-span-1 sm:col-span-1 md:col-span-2 lg:col-span-3">
                    <button type="submit" className="bg-green-600 text-white px-6 py-3 rounded-md w-full hover:bg-green-700 transition duration-300">
                        Add Product
                    </button>
                </div>

            </form>
        </div>
    );
};

export default AddCraftList;
