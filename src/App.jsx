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
  <div className="container mx-auto flex justify-between items-center">
    <div className="flex items-center space-x-2">
      {/* You can add a logo or other elements here */}
    </div>
    <span className="text-sm">© 2023 Are You Starving? All rights reserved.</span>
    <div className="flex space-x-4">
      <a href="#" className="text-white hover:underline">Privacy Policy</a>
      <a href="#" className="text-white hover:underline">Terms of Service</a>
    </div>
  </div>
  <div className="container mx-auto mt-6 grid grid-cols-1 sm:grid-cols-4 gap-4 text-sm">
    <div>
      <h3 className="font-bold text-lg mb-2">Company</h3>
      <ul className="space-y-1">
        <li><a href="#" className="hover:underline">About Us</a></li>
        <li><a href="#" className="hover:underline">Careers</a></li>
        <li><a href="#" className="hover:underline">Press</a></li>
      </ul>
    </div>
    <div>
      <h3 className="font-bold text-lg mb-2">Location</h3>
      <ul className="space-y-1">
        <li> 22 Point Bld</li>
        <li>Addis Ababa, 22 Point Building</li>
        <li>Ethiopia</li>
      </ul>
    </div>
    <div>
      <h3 className="font-bold text-lg mb-2">Legal</h3>
      <ul className="space-y-1">
        <li><a href="#" className="hover:underline">Privacy Policy</a></li>
        <li><a href="#" className="hover:underline">Terms of Service</a></li>
        <li><a href="#" className="hover:underline">Cookie Policy</a></li>
      </ul>
    </div>
    <div>
      <h3 className="font-bold text-lg mb-2">Contact</h3>
        <ul className="space-y-1">
          <li><a href="#" className="hover:underline">Facebook</a></li>
          <li><a href="#" className="hover:underline">Twitter</a></li>
          <li><a href="#" className="hover:underline">Instagram</a></li>
          <li>Support: <a href="#" className="hover:underline">Contact Support</a></li>
        </ul>
    </div>
  </div>
</footer>
      </div>
    </Router>
  )
}

export default App
