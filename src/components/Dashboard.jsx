import SummaryCard from './SummaryCard'

function Dashboard({ transactions }) {
  const totalIncome = transactions
    .filter((t) => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0)

  const totalExpense = transactions
    .filter((t) => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0)

  const balance = totalIncome - totalExpense

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 px-6 pt-6">
      <SummaryCard
        title="Total Balance"
        amount={`Rs ${balance}`}
        icon="wallet"
        iconColor="text-[#cc253e]"
      />
      <SummaryCard
        title="Income"
        amount={`Rs ${totalIncome}`}
        icon="trending_up"
        iconColor="text-green-400"
      />
      <SummaryCard
        title="Expense"
        amount={`Rs ${totalExpense}`}
        icon="trending_down"
        iconColor="text-[#cc253e]"
      />
    </div>
  )
}

export default Dashboard