import React from 'react';
import { useNavigate} from 'react-router';

const Error = () => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] py-12 bg-white">
        <img src="https://i.ibb.co.com/vCpqXXbm/image.jpg" alt="404 Robot"
            className="w-64 h-64 mb-6"
        />
        <h1 className="text-3xl font-bold text-pink-500 mb-2">404 - Page Not Found</h1>
        <p className="text-gray-600 mb-6">Oops! The page you're looking for doesn't exist.</p>
        <button
            onClick={() => navigate('/')}
            className="btn bg-blue-500 text-white border-none rounded-full px-6 py-2 hover:bg-blue-600"
        >
            Go Back Home
        </button>
    </div>
    );
};

export default Error;