const Settings = ({ darkMode, setDarkMode }) => {
  return (
    <div className="mt-10 px-6 pb-10 ">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-5">
        <h2 className="font-semibold text-lg mb-3 dark:text-white">Settings</h2>

        <div className="flex items-center justify-between">
          <p className="text-sm dark:text-gray-300">Dark Mode</p>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white text-sm font-medium"
          >
            {darkMode ? 'On' : 'Off'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Settings