import React from 'react';

const AddMeal = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
                <h1 className="text-3xl font-bold text-green-600 mb-6 text-center">Add a New Meal</h1>
                <form className="space-y-6">
                    {/* Meal Name */}
                    <div>
                        <label className="block text-gray-800 font-medium mb-2">Meal Name</label>
                        <input
                            type="text"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                            placeholder="Enter meal name"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-800 font-medium mb-2">Description</label>
                        <textarea
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                            rows="4"
                            placeholder="Enter meal description"
                        ></textarea>
                    </div>

                    <div className="flex justify-between items-center">
                        <button
                            type="submit"
                            className="bg-green-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-green-600 transition duration-200 shadow-md"
                        >
                            Add Meal
                        </button>
                        <button
                            type="button"
                            className="bg-gray-300 text-gray-800 font-semibold px-6 py-3 rounded-lg hover:bg-gray-400 transition duration-200"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddMeal;

