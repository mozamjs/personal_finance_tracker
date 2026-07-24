import React from 'react'

const Navbar = () => {
  return (
    <nav className = "flex items-center justify-between px-6 py-4 bg-white shadow-sm">

        <h1 className = "text-xl font-bold text-indigo-600">Finance Tracker</h1>

        <button className = "px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-sm font-medium ">
            Dark Mode
        </button>




    </nav>
  )
}

export default Navbar