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
    <div className="px-6 pb-10">
      <TransactionForm
        onAddTransaction={addTransaction}
        onUpdateTransaction={updateTransaction}
        editingTransaction={editingTransaction}
      />

      <div className="flex gap-3 mt-4">
        <input
          type="text"
          placeholder="Search by category..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="border rounded-lg px-3 py-2 text-sm dark:bg-gray-700 dark:text-white dark:border-gray-600"
        />

        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="border rounded-lg px-3 py-2 text-sm dark:bg-gray-700 dark:text-white dark:border-gray-600"
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