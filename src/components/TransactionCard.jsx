function TransactionCard({ transaction, onDelete, onEdit }) {
  const isIncome = transaction.type === 'income'

  return (
    <div className="group flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-[#1a1a1a] transition-colors border-b border-gray-200 dark:border-[#222222] last:border-0">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 bg-gray-100 dark:bg-[#222222] border border-gray-200 dark:border-transparent rounded-lg flex items-center justify-center">
          <span className={`material-symbols-outlined ${isIncome ? 'text-green-500 dark:text-green-400' : 'text-gray-600 dark:text-gray-300'}`}>
            {isIncome ? 'payments' : 'shopping_cart'}
          </span>
        </div>
        <div>
          <h4 className="text-sm font-medium text-gray-900 dark:text-white">{transaction.category}</h4>
          <span className="text-xs text-gray-400 dark:text-gray-500">{transaction.date}</span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <span className={`text-sm font-bold ${isIncome ? 'text-green-500 dark:text-green-400' : 'text-gray-900 dark:text-white'}`}>
          {isIncome ? '+' : '-'} Rs {transaction.amount}
        </span>

        <div className="hidden group-hover:flex items-center gap-2">
          <button onClick={() => onEdit(transaction)} className="text-gray-400 hover:text-[#cc253e]">
            <span className="material-symbols-outlined text-lg">edit</span>
          </button>
          <button onClick={() => onDelete(transaction.id)} className="text-gray-400 hover:text-[#cc253e]">
            <span className="material-symbols-outlined text-lg">delete</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default TransactionCard