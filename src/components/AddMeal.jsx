import React from 'react';

const AddMeal = () => {
    return (
        <div>
            <h1 className='text-2xl text-green-500'>Add Meal</h1>
            <form className='space-y-4'>
                <div>
                    <label className='block text-gray-700'>Meal Name</label>
                    <input type='text' className='w-full p-2 border rounded' placeholder='Enter meal name' />
                </div>
                <div>
                    <label className='block text-gray-700'>Description</label>
                    <textarea className='w-full p-2 border rounded' placeholder='Enter meal description'></textarea>
                </div>
                <button type='submit' className='bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600'>
                    Add Meal
                </button>
            </form>
            <button className='bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400 ml-2'>
                Cancel
            </button>
        </div>
    );
}

export default AddMeal;
