function ExpenseChart({ transactions }) {
  const totalIncome = transactions
    .filter((t) => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0)

  const totalExpense = transactions
    .filter((t) => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0)

  const total = totalIncome + totalExpense
  const expensePercent = total > 0 ? Math.round((totalExpense / total) * 100) : 0
  const incomePercent = 100 - expensePercent
  const ratio = totalExpense > 0 ? (totalIncome / totalExpense).toFixed(1) : '0'

  if (total === 0) {
    return (
      <div className="bg-white dark:bg-[#111111] border border-gray-200 dark:border-[#222222] shadow-sm dark:shadow-none rounded-xl p-5 mx-6 mt-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Financial Overview</h3>
        <p className="text-sm text-gray-400 text-center py-10">
          Add transactions to see your chart
        </p>
      </div>
    )
  }

  return (
    <div className="bg-white dark:bg-[#111111] border border-gray-200 dark:border-[#222222] shadow-sm dark:shadow-none rounded-xl p-5 mx-6 mt-6 flex flex-col md:flex-row items-center justify-around gap-6">
      <div className="space-y-3">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Financial Overview</h3>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#cc253e]"></div>
            <span className="text-sm text-gray-600 dark:text-gray-300">Expense ({expensePercent}%)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="text-sm text-gray-600 dark:text-gray-300">Income ({incomePercent}%)</span>
          </div>
        </div>
      </div>

      <div
        className="relative w-44 h-44 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(204,37,62,0.1)]"
        style={{
          background: `conic-gradient(#cc253e 0% ${expensePercent}%, #22c55e ${expensePercent}% 100%)`,
        }}
      >
        <div className="absolute w-32 h-32 bg-white dark:bg-[#111111] rounded-full"></div>
        <div className="relative text-center">
          <span className="text-xs text-gray-400 uppercase block">Ratio</span>
          <span className="text-xl font-bold text-gray-900 dark:text-white">{ratio}:1</span>
        </div>
      </div>
    </div>
  )
}

export default ExpenseChart