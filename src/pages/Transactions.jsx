import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";
import { useTransactions } from "../context/TransactionContext";

const Transactions = () => {
  const {
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
  } = useTransactions()

  return (
    <div className="px-6 pt-6 pb-10 space-y-6">
      <TransactionForm
        onAddTransaction={addTransaction}
        onUpdateTransaction={updateTransaction}
        editingTransaction={editingTransaction}
      />

      <div className="flex gap-3">
        <input
          type="text"
          placeholder="Search by category..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="border border-gray-300 dark:border-[#222222] bg-white dark:bg-[#111111] text-gray-900 dark:text-white rounded-lg px-3 py-2 text-sm w-full focus:outline-none focus:border-[#cc253e]"
        />

        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="border border-gray-300 dark:border-[#222222] bg-white dark:bg-[#111111] text-gray-900 dark:text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#cc253e]"
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
        onDelete={deleteTransaction}
        onEdit={setEditingTransaction}
      />
    </div>
  )
}

export default Transactions