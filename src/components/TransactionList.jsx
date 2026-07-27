import TransactionCard from "./TransactionCard";


const TransactionList = ({transactions, onDelete, onEdit}) => {

console.log('transactionList recieved:' ,transactions)

    if(!transactions || transactions.length === 0)
    {
        return(
            <p className="text-sm text-gray-400 text-center mt-6">
                No transactions yet. Add one to get started
            </p>
        )
    }




  return (
  <div className="flex flex-col gap-2 mt-4">
    {
        transactions.map((t) => (
            <TransactionCard key = {t.id} transaction={t} onDelete={onDelete}
            onEdit={onEdit}
            />
        ) ) 
    }
  </div>
  )
}

export default TransactionList