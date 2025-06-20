import React from 'react';

const DeleteMeal = () => {
    return (
        <div>
            <h1 className='text-2xl text-red-500'>Delete Meal</h1>
            <p className='text-gray-700'>Are you sure you want to delete this meal?</p>
            <button className='bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600'>
                Confirm Delete
            </button>
            <button className='bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400 ml-2'>
                Cancel
            </button>
        </div>
    );
}

export default DeleteMeal;
