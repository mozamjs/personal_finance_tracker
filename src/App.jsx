import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Transactions from './pages/Transactions.jsx'
import Settings from './pages/Settings.jsx'

const App = () => {


//states...

  const [transactions, setTransactions] = useState(()=> {
    const saved = localStorage.getItem('transactions')
    return saved ? JSON.parse(saved) : []
  })
  const [searchText, setSearchText] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('all')
  const [editingTransaction, setEditingTransaction] = useState(null)
  const [darkMode, setDarkMode] = useState(false)

//use Effects...

  useEffect(()=>{
    localStorage.setItem('transactions', JSON.stringify(transactions))
  },[transactions])

  useEffect(()=> {
    const root = document.documentElement
    if(darkMode){
      root.classList.add('dark')
    }else{
      root.classList.remove('dark')
    }

  },[darkMode])




  function handleAddTransaction(newTransaction) {
    // setTransactions([newTransaction, ...transactions])
    setTransactions((prev) => [newTransaction, ...prev]);
  }


  function handleUpdateTransaction(updatedTransaction){
    setTransactions(
      transactions.map((t)=>
        t.id === updatedTransaction.id ? updatedTransaction : t
      )
    )
    setEditingTransaction(null)
  }

  function handleDeleteTransaction(id) {
    // setTransactions(transactions.filter((t)=> t.id !== id))

    setTransactions((prev) =>
      prev.filter((t) => t.id !== id)
    );

  }

  const categories = [...new Set(transactions.map((t) => t.category))]

  const filteredTransactions = transactions
  .filter((t)=> t.category.toLowerCase().includes(searchText.toLowerCase()))
  .filter((t)=> categoryFilter === 'all' || t.category === categoryFilter)

  console.log("transaction", transactions)
  console.log("filteredTransactions", filteredTransactions)

  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <Routes>
        <Route path="/" element={<Home transactions={transactions} />} />
        <Route
          path="/transactions"
          element={
            <Transactions
              onAddTransaction={handleAddTransaction}
              onUpdateTransaction={handleUpdateTransaction}
              editingTransaction={editingTransaction}
              searchText={searchText}
              setSearchText={setSearchText}
              categoryFilter={categoryFilter}
              setCategoryFilter={setCategoryFilter}
              categories={categories}
              filteredTransactions={filteredTransactions}
              onDelete={handleDeleteTransaction}
              onEdit={setEditingTransaction}
            />
          }
        />
        <Route
          path="/settings"
          element={<Settings darkMode={darkMode} setDarkMode={setDarkMode} />}
        />
      </Routes>
    </div>
  )


}

export default App
