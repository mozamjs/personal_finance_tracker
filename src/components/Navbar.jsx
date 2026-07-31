import { Link } from 'react-router-dom'

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-white/5 sticky top-0 z-10">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-[#cc253e] flex items-center justify-center">
          <span className="material-symbols-outlined text-black text-lg">
            account_balance_wallet
          </span>
        </div>
        <h1 className="text-lg font-semibold text-gray-900 dark:text-white">Finora</h1>
      </div>

      <div className="hidden sm:flex items-center gap-6">
        <Link to="/" className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-300 hover:text-[#cc253e]">
          <span className="material-symbols-outlined text-lg">home</span>
          Home
        </Link>
        <Link to="/transactions" className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-300 hover:text-[#cc253e]">
          <span className="material-symbols-outlined text-lg">receipt_long</span>
          Transactions
        </Link>
        <Link to="/settings" className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-300 hover:text-[#cc253e]">
          <span className="material-symbols-outlined text-lg">settings</span>
          Settings
        </Link>
      </div>

      <button
        onClick={() => setDarkMode(!darkMode)}
        className="w-9 h-9 rounded-full bg-gray-100 dark:bg-white/10 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-white/20 transition"
      >
        <span className="material-symbols-outlined text-gray-700 dark:text-white text-lg">
          {darkMode ? 'light_mode' : 'dark_mode'}
        </span>
      </button>
    </nav>
  )
}

export default Navbar