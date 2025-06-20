import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './components/Home.jsx'
import DeleteMeal from './components/DeleteMeal.jsx'
import AddMeal from './components/AddMeal.jsx'
import EditMeal from './components/EditMeal.jsx'
import './App.css'

function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="delete-meal" element={<DeleteMeal />} />
            <Route path="add-meal" element={<AddMeal />} />
            <Route path="edit-meal/:id" element={<EditMeal />} />
          </Routes>
        <footer className="text-center p-4 bg-gray-800 text-white">
          <div className='container mx-auto flex justify-between items-center'>
            <span className="text-sm">© 2023 Are You Starving? All rights reserved.</span>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:underline">Privacy Policy</a>
              <a href="#" className="text-white hover:underline">Terms of Service</a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  )
}

export default App
