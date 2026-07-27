import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";


const Transactions = ({
    onAddTransaction,
    onUpdateTransaction,
    editingTransaction,
    searchText,
    setSearchText,
    categoryFilter,
    setCategoryFilter,
    categories,
    filteredTransactions,
    onDelete, onEdit
}) => {
  return (
    <div className="px-6 pb-10">
        <TransactionForm
            onAddTransaction={onAddTransaction}
            onUpdateTransaction={onUpdateTransaction}
            editingTransaction={editingTransaction}
        />

        <div className="flex gap-3 mt-4">
            <input 
                type="text"
                placeholder="Search by categoty..."
                value={searchText}
                onChange={(e)=> setSearchText(e.target.value)}
                className="border rounded-lg px-3 py-2 text-sm dark:bg-gray-700 dark:text-white dark:border-gray-600"
             />

             <select 
                value={categoryFilter}
                onChange={(e)=> setCategoryFilter(e.target.value)}
                className="border rounded-lg px-3 py-2 text-sm dark:bg-gray-700 dark:text-white dark:border-gray-600"
             >
               <option value="all">All Categories</option>
               {categories.map((cat)=> (
                 <option key = {cat} value={cat}>
                    {cat}
                </option>
               ))}

             </select>

        </div>

        <TransactionList
            transactions={filteredTransactions}
            onDelete={onDelete}
            onEdit={onEdit}
        />


    </div>
  )
}

export default Transactions