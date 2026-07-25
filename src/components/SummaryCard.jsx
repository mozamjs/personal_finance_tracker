import React from 'react'

const SummaryCard = ({ title, amount, color }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-5 flex-1">
      <p className="text-gray-500 dark:text-gray-400 text-sm">{title}</p>
      <p className={`text-2xl font-bold mt-1 ${color}`}>
        Rs {amount}
      </p>
    </div>
  )

}

export default SummaryCard