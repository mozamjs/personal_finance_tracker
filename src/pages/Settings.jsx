function Settings({ darkMode, setDarkMode }) {
  return (
    <div className="mt-5 px-6 pb-10">
      <div className="bg-white dark:bg-[#111111] border border-gray-200 dark:border-[#222222] shadow-sm dark:shadow-none rounded-xl p-5">
        <h2 className="font-semibold text-lg mb-3 text-gray-900 dark:text-white">Settings</h2>

        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-600 dark:text-gray-300">Dark Mode</p>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-[#222222] text-gray-900 dark:text-white text-sm font-medium"
          >
            {darkMode ? 'On' : 'Off'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Settings