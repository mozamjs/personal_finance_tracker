import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = ({darkMode , setDarkMode}) => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 shadow-sm">
      <h1 className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
        💰 Finance Tracker
      </h1>

      <div className='flex items-center gap-4'>
        <Link to="/" className="text-sm font-medium dark:text-white hover:text-indigo-600">
          Home
        </Link>
        <Link to="/transactions" className="text-sm font-medium dark:text-white hover:text-indigo-600">
          Transactions
        </Link>
        <Link to="/settings" className="text-sm font-medium dark:text-white hover:text-indigo-600">
          Settings
        </Link>

         <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 text-sm font-medium"
        >
          {darkMode ? '☀️' : '🌙'}
        </button>

        
      </div>

    </nav>
  )
}

export default Navbar