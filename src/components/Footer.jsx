import React from 'react'

const Footer = () => {
  return (
    <footer className = "text-center py-6 text-xs text-gray-400 dark:text-gray-500 border-t border-gray-100 dark:border-gray-800 mt-10">
        Built with React & Tailwind CSS . {new Date().getFullYear()}
    </footer>
  )
}

export default Footer