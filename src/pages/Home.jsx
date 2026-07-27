import Dashboard from "../components/Dashboard";
import ExpenseChart from "../components/ExpenseChart";


const Home = ({transactions}) => {
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