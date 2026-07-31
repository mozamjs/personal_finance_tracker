import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Transactions from './pages/Transactions.jsx'
import Settings from './pages/Settings.jsx'
import useLocalStorage from './hooks/useLocalStorage.js'
import Footer from './components/Footer.jsx'

const App = () => {
  const [darkMode, setDarkMode] = useLocalStorage('darkMode', false)

  useEffect(() => {
    const root = document.documentElement
    if (darkMode) {
      
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black transition-colors">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route
          path="/settings"
          element={<Settings darkMode={darkMode} setDarkMode={setDarkMode} />}
        />
      </Routes>

      <Footer/>
    </div>
  )
}

export default App