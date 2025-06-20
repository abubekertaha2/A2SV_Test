

import { useNavigate } from 'react-router-dom';
import React from 'react';
import { Link } from 'react-router-dom';

const DeleteMeal = () => {
    const navigate = useNavigate();

    const handleDelete = async () => {
        try {
            
            await fetch(`https://6852821e0594059b23cdd834.mockapi.io/Food`, {
                method: 'DELETE',
            });
            navigate('/');
        } catch (err) {
            console.error('Delete failed', err);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-sm bg-white shadow-lg rounded-lg p-6 text-center">
                <h1 className="text-3xl font-bold text-red-600 mb-4">Delete Meal</h1>
                <p className="text-gray-800 mb-6">
                    Are you sure you want to delete this meal? This action cannot be undone.
                </p>
                <div className="flex justify-center space-x-4">
                    <button
                        onClick={handleDelete}
                        className="px-6 py-3 font-semibold text-white bg-red-500 rounded-lg hover:bg-red-600 shadow-md transition duration-200"
                    >
                        Confirm Delete
                    </button>
                    <Link to="/" className="inline-block">
                        <button
                            type="button"
                            className="px-6 py-3 font-semibold text-gray-600 border border-gray-600 rounded-lg hover:bg-gray-600 hover:text-white transition duration-200"
                        >
                            Cancel
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default DeleteMeal;