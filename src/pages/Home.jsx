import Dashboard from "../components/Dashboard";
import ExpenseChart from "../components/ExpenseChart";
import { useTransactions } from "../context/TransactionContext";

const Home = () => {
  const {transactions} = useTransactions()
  return (
    <div>
        <Dashboard transactions={transactions}/>
        <div className="px-6">
            <ExpenseChart transactions={transactions} />
        </div>

    </div>
  )
}

export default Home