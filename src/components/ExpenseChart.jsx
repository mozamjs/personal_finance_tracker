import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const COLORS = ['#22c55e', '#ef4444'] // green for income, red for expense

const ExpenseChart = ({ transactions }) => {
  const totalIncome = transactions
    .filter((t) => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0)

  const totalExpense = transactions
    .filter((t) => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0) 

  const data = [
    { name: 'Income', value: totalIncome },
    { name: 'Expense', value: totalExpense },
  ]

  const hasData = totalIncome > 0 || totalExpense > 0

  if (!hasData) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-5 mt-4">
        <h2 className="font-semibold text-lg mb-3 dark:text-white">Overview</h2>
        <p className="text-sm text-gray-400 text-center py-10">
          Add transactions to see your chart
        </p>
      </div>
    )
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-5 mt-4">
      <h2 className="font-semibold text-lg mb-3 dark:text-white">Overview</h2>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            label
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default ExpenseChart