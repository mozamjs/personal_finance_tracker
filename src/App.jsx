import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Dashboard from './components/Dashboard.jsx'
import TransactionForm from './components/TransactionForm.jsx'
import TransactionList from './components/TransactionList.jsx'

const App = () => {


//states
  const [transactions, setTransactions] = useState(()=> {
    const saved = localStorage.getItem('transactions')
    return saved ? JSON.parse(saved) : []
  })
  const [searchText, setSearchText] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('all')
  const [editingTransaction, setEditingTransaction] = useState(null)


  useEffect(()=>{
    localStorage.setItem('transactions', JSON.stringify(transactions))
  },[transactions])


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

  


 return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Dashboard transactions={transactions} />
      <div className="px-6 pb-10">
        <TransactionForm
         onAddTransaction={handleAddTransaction} 
         onUpdateTransaction={handleUpdateTransaction}
         editingTransaction={editingTransaction}
         />

        <div className="flex gap-3 mt-4">
          <input
            type="text"
            placeholder="Search by category..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="border rounded-lg px-3 py-2 text-sm w-full"
          />

          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="border rounded-lg px-3 py-2 text-sm"
          >
            <option value="all">All Categories</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <TransactionList
          transactions={filteredTransactions}
          onDelete={handleDeleteTransaction}
          onEdit={setEditingTransaction}
        />
      </div>
    </div>
  )
}

export default App
