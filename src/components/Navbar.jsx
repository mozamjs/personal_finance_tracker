import React from 'react'

const Navbar = ({darkMode , setDarkMode}) => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 shadow-sm">
      <h1 className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
        💰 Finance Tracker
      </h1>

      <button
        onClick={() => setDarkMode(!darkMode)}
        className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 text-sm font-medium"
      >
        {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>
    </nav>
  )
}

export default Navbar