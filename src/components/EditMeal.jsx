import React from 'react';

const EditMeal = () => {
    return (
        <div>
            <h1 className='text-2xl text-blue-500'>Edit Meal</h1>
            <form className='space-y-4'>
                <div>
                    <label className='block text-gray-700'>Meal Name</label>
                    <input type='text' className='w-full p-2 border rounded' placeholder='Enter meal name' />
                </div>
                <div>
                    <label className='block text-gray-700'>Description</label>
                    <textarea className='w-full p-2 border rounded' placeholder='Enter meal description'></textarea>
                </div>
                <button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>
                    Save Changes
                </button>
            </form>
            <button className='bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400 ml-2'>
                Cancel
            </button>
        </div>
    );
}

export default EditMeal;
