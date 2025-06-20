

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
  const [meals, setMeals] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const controller = new AbortController();
    const fetchMeals = async () => {
      try {
        const res = await axios.get(
          'https://6852821e0594059b23cdd834.mockapi.io/Food',
          { signal: controller.signal }
        );
        setMeals(res.data);
        setFiltered(res.data);
      } catch (err) {
        if (!axios.isCancel(err)) setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchMeals();
    return () => controller.abort();
  }, []);
  useEffect(() => {
    const q = query.toLowerCase();
    setFiltered(
      meals.filter(m =>
        m.name.toLowerCase().includes(q)
      )
    );
  }, [query, meals]);

  if (loading) return <p>Loading meals…</p>;
  if (error) return <p style={{ color: 'red' }}>Error: {error.message}</p>;

  return (
    <div className="p-4">
      <header className="bg-yellow-500 text-white p-6 mb-6 rounded mx-4 my-6">
        <h1 className="text-2xl font-bold">Are You Starving?</h1>
        <input
            type="text"
            placeholder="Search food..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="border p-2 mb-4 w-full rounded bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-300"
      />
      </header>

      <ul className="space-y-2">
        {filtered.length > 0 ? (
          filtered.map(meal => (
            <li key={meal.id}>
              <Link
                to={`/meals/${meal.id}`}
                className="text-blue-600 hover:underline"
              >
                {meal.name}
              </Link>
            </li>
          ))
        ) : (
          <li>No meals found for "{query}"</li>
        )}
      </ul>
      <div className='mt-6'>
        <Link
          to="/add-meal"
          className="mt-4 inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Add Meal
        </Link>
        <Link
          to="/delete-meal"
          className="mt-4 inline-block bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 ml-2"
        >
          Delete Meal
        </Link>
        <Link
          to="/edit-meal"
          className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 ml-2"
        >
          Edit Meal
        </Link>
      </div>
    </div>
  );
};

export default Home;
