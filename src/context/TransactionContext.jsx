import { createContext, useContext, useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

const TransactionContext = createContext()

export function TransactionProvider({ children }) {
  const [transactions, setTransactions] = useLocalStorage('trasactions', [])
  const [searchText, setSearchText] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('all')
  const [editingTransaction, setEditingTransaction] = useState(null)



  function addTransaction(newTransaction) {
    setTransactions((prev) => [newTransaction, ...prev])
  }

  function updateTransaction(updatedTransaction) {
    setTransactions((prev) =>
      prev.map((t) => (t.id === updatedTransaction.id ? updatedTransaction : t))
    )
    setEditingTransaction(null)
  }

  function deleteTransaction(id) {
    setTransactions((prev) => prev.filter((t) => t.id !== id))
  }

  const categories = [...new Set(transactions.map((t) => t.category))]

  const filteredTransactions = transactions
    .filter((t) => t.category.toLowerCase().includes(searchText.toLowerCase()))
    .filter((t) => categoryFilter === 'all' || t.category === categoryFilter)

  const value = {
    transactions,
    filteredTransactions,
    categories,
    searchText,
    setSearchText,
    categoryFilter,
    setCategoryFilter,
    editingTransaction,
    setEditingTransaction,
    addTransaction,
    updateTransaction,
    deleteTransaction,
  }

  return (
    <TransactionContext.Provider value={value}>
      {children}
    </TransactionContext.Provider>
  )
}

export function useTransactions() {
  return useContext(TransactionContext)
}