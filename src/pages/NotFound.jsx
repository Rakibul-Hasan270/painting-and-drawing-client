import { Link } from "react-router";


const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
            <h1 className="text-6xl font-bold text-red-500">404</h1>
            <h2 className="text-2xl font-semibold mt-4 text-gray-800">Oops! Page Not Found</h2>
            <p className="text-gray-600 mt-2">The page you are looking for might have been removed or is temporarily unavailable.</p>

            <img 
                src="https://i.imgur.com/qIufhof.png" 
                alt="404 Not Found"
                className="w-64 mt-6"
            />

            <Link to="/" className="mt-6 px-6 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-700 transition">Go to Home</Link>
        </div>
    );
};

export default NotFound;
