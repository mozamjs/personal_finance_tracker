import TransactionCard from "./TransactionCard"

const TransactionList = ({ transactions, onDelete, onEdit }) => {
  return (
    <div className="bg-white dark:bg-[#111111] border border-gray-200 dark:border-[#222222] shadow-sm dark:shadow-none rounded-xl p-5">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Recent Transactions</h3>
      </div>

      {!transactions || transactions.length === 0 ? (
        <p className="text-sm text-gray-400 text-center py-6">
          No transactions yet. Add one to get started.
        </p>
      ) : (
        <div className="space-y-1">
          {transactions.map((t) => (
            <TransactionCard key={t.id} transaction={t} onDelete={onDelete} onEdit={onEdit} />
          ))}
        </div>
      )}
    </div>
  )
}

export default TransactionList