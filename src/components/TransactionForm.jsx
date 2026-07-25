import React, { useState, useEffect } from 'react'


const TransactionForm = ({ onAddTransaction, onUpdateTransaction, editingTransaction }) => {

  const [type, setType] = useState('income')
  const [amount, setAmount] = useState('')
  const [category, setCategory] = useState('')
  const [note, setNote] = useState('')


  useEffect(() => {
    if (editingTransaction) {
      setType(editingTransaction.type)
      setAmount(editingTransaction.amount)
      setCategory(editingTransaction.category)
      setNote(editingTransaction.note)
    }
  }, [editingTransaction])


  function handleSubmit(e) {
    e.preventDefault()

    if (!amount || !category) return


    if (editingTransaction) {
      //update existing transaction
      onUpdateTransaction({
        ...editingTransaction,
        type,
        amount: Number(amount),
        category,
        note,
      })
    }
    else {
      onAddTransaction({
        //create new transaction
        id: Date.now(),
        type,
        amount: Number(amount),
        category,
        note,
        date: new Date().toLocaleDateString()
      })
    }



    setAmount("")
    setCategory("")
    setNote("")

  }



  return (


    <form
      onSubmit={handleSubmit}
  className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-5 flex flex-col gap-3"
    >

      <h2 className="font-semibold text-lg mb-1 dark:text-white">
        {editingTransaction ? 'Edit Transaction' : 'Add Transaction'}
      </h2>


      <div className="flex gap-2">

        <button
          type="button"
          onClick={() => setType('income')}
          className={`flex-1 py-2 rounded-lg text-sm font-medium ${type === 'income' ? 'bg-green-600 text-white' : 'bg-gray-100'
            } `}
        >
          Income

        </button>

        <button
          type="button"
          onClick={() => setType('expense')}
          className={`flex-1 py-2 rounded-lg text-sm font-medium ${type === 'expense' ? 'bg-red-600 text-white' : 'bg-gray-100'
            }`}
        >
          Expense
        </button>

      </div>


      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="border rounded-lg px-3 py-2 text-sm  dark:bg-gray-700 dark:text-white dark:border-gray-600"
      />

      <input
        type="text"
        placeholder="Category (e.g. Food, Salary)"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border rounded-lg px-3 py-2 text-sm dark:bg-gray-700 dark:text-white dark:border-gray-600"
      />


      <input
        type="text"
        placeholder="Note (optional)"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        className="border rounded-lg px-3 py-2 text-sm dark:bg-gray-700 dark:text-white dark:border-gray-600"
      />


      <button
        type="submit"
        className="bg-indigo-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-indigo-700"
      >
        {editingTransaction ? 'update Transaction': 'Add Transaction'}
      </button>

    </form>
    
  )
}

export default TransactionForm