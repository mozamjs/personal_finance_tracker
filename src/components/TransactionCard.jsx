import React from 'react'

const TransactionCard = ({transaction , onDelete, onEdit}) => {

    const isIncome = transaction.type === 'income'

  return (
    <div className='flex item-center justify-between bg-white rounded-lg px-4 py-3 sgadow-sm'>

        <div>

            <p className='font-medium text-sm'>{transaction.category}</p>

            <p className='text-xs text-gray-400'>{transaction.date }</p>

            {transaction.note && (
            <p className=' text-xs text-gray-500 mt-0.5'> {transaction.note}</p>
            )}

        </div>

        <div className="flex items-center gap-3">
             
            <p className= {`font-semibold text-sm ${isIncome ? 'text-green-600': 'text-red-600'}`}>
                {isIncome ? '+' : '-'} Rs {transaction.amount}
            </p>

             <button
          onClick={() => onEdit(transaction)}
          className="text-gray-400 hover:text-indigo-500 text-sm"
        >
          ✎
        </button>

            <button
                onClick={()=> onDelete(transaction.id)}
                className="text-gray-400 hover:text-red-500 text-sm"

            >
                ✕
            </button>


        </div>


    </div>
  )
}

export default TransactionCard