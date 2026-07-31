import { useState, useEffect } from 'react'

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
      onUpdateTransaction({
        ...editingTransaction,
        type,
        amount: Number(amount),
        category,
        note,
      })
    } else {
      onAddTransaction({
        id: Date.now(),
        type,
        amount: Number(amount),
        category,
        note,
        date: new Date().toLocaleDateString(),
      })
    }

    setAmount('')
    setCategory('')
    setNote('')
  }

  return (
    <div className="bg-white/90 dark:bg-[#1a1a1a]/80 backdrop-blur-xl border border-gray-200 dark:border-[#cc253e]/20 shadow-md dark:shadow-[0_10px_30px_rgba(0,0,0,0.5)] rounded-xl p-5">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
        {editingTransaction ? 'Edit Transaction' : 'Add Transaction'}
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setType('income')}
            className={`flex-1 py-2 rounded-lg text-sm font-medium transition ${
              type === 'income'
                ? 'bg-green-500 text-white'
                : 'bg-gray-100 dark:bg-[#111111] text-gray-500 dark:text-gray-400 border border-gray-300 dark:border-[#222222]'
            }`}
          >
            Income
          </button>
          <button
            type="button"
            onClick={() => setType('expense')}
            className={`flex-1 py-2 rounded-lg text-sm font-medium transition ${
              type === 'expense'
                ? 'bg-[#cc253e] text-white'
                : 'bg-gray-100 dark:bg-[#111111] text-gray-500 dark:text-gray-400 border border-gray-300 dark:border-[#222222]'
            }`}
          >
            Expense
          </button>
        </div>

        <div className="space-y-1">
          <label className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">Amount</label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500">Rs</span>
            <input
              type="number"
              placeholder="0.00"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full bg-white dark:bg-[#111111] border border-gray-300 dark:border-[#222222] rounded-lg py-3 pl-10 pr-4 text-gray-900 dark:text-white focus:outline-none focus:border-[#cc253e] transition"
            />
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">Category</label>
          <input
            type="text"
            placeholder="e.g. Food, Salary"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full bg-white dark:bg-[#111111] border border-gray-300 dark:border-[#222222] rounded-lg py-3 px-4 text-gray-900 dark:text-white focus:outline-none focus:border-[#cc253e] transition"
          />
        </div>

        <div className="space-y-1">
          <label className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">Note (optional)</label>
          <input
            type="text"
            placeholder="Add a note"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="w-full bg-white dark:bg-[#111111] border border-gray-300 dark:border-[#222222] rounded-lg py-3 px-4 text-gray-900 dark:text-white focus:outline-none focus:border-[#cc253e] transition"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3.5 rounded-xl bg-[#cc253e] text-white font-bold shadow-[0_4px_15px_rgba(204,37,62,0.3)] hover:brightness-110 active:scale-95 transition-all"
        >
          {editingTransaction ? 'Update Transaction' : 'Confirm Transaction'}
        </button>
      </form>
    </div>
  )
}

export default TransactionForm