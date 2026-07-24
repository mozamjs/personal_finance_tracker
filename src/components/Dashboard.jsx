import SummaryCard from './SummaryCard'
import React from 'react'

const Dashboard = ({transactions}) => {

    const totalIncome = transactions
      .filter ((t)=> t.type === 'income')
      .reduce((sum, t)=> sum + t.amount , 0 )

    const totalExpense = transactions
    .filter((t) => t.type === 'expense')
    .reduce((sum , t) => sum + t.amount, 0)

    const balance = totalIncome - totalExpense

  return (
    <div className = "flex flex-col sm:flex-row gap-4 p-6">

        <SummaryCard title = "Total Balance" amount = {balance} color = "text-indigo-600"/>

        <SummaryCard title = "Total Income" amount = {totalIncome} color = "text-green-600"/>

        <SummaryCard title = "Total Expense" amount = {totalExpense} color = "text-red-600"/>

    </div>
  )
}

export default Dashboard