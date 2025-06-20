import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate, Link } from 'react-router-dom';

const EditMeal = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [meal, setMeal] = useState({ name: '', description: '' });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    axios.get(`https://api.example.com/meals/${id}`)
      .then(res => setMeal({ name: res.data.name, description: res.data.description }))
      .catch(err => setError(err))
      .finally(() => setLoading(false));
  }, [id]);

  const handleChange = e => {
    const { name, value } = e.target;
    setMeal(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.put(`https://6852821e0594059b23cdd834.mockapi.io/Food${id}`, meal);
      navigate(`/meals/${id}`);
    } catch (err) {
      console.error(err);
      setError(err);
    }
  };

  if (loading) return <p>Loading meal data…</p>;
  if (error) return <p className="text-red-600">Error: {error.message}</p>;

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl text-blue-500 mb-4">Edit Meal</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Meal Name</label>
          <input
            name="name"
            type="text"
            className="w-full p-2 border rounded"
            placeholder="Enter meal name"
            value={meal.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-gray-700">Description</label>
          <textarea
            name="description"
            className="w-full p-2 border rounded"
            placeholder="Enter meal description"
            value={meal.description}
            onChange={handleChange}
          />
        </div>

        <div className="flex space-x-2">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Save Changes
          </button>
          <Link to={`/meals/${id}`}>
            <button
              type="button"
              className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default EditMeal;


