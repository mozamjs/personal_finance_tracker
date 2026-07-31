function SummaryCard({ title, amount, icon, iconColor, subtitle, subtitleColor }) {
  return (
    <div className="bg-white dark:bg-[#111111] border border-gray-200 dark:border-[#222222] shadow-sm dark:shadow-none rounded-xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#cc253e] hover:shadow-md dark:hover:shadow-[0_0_20px_rgba(204,37,62,0.15)] flex-1">
      <div className="flex justify-between items-start mb-3">
        <span className={`material-symbols-outlined text-2xl ${iconColor}`}>{icon}</span>
        <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">{title}</span>
      </div>
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{amount}</h2>
      {subtitle && (
        <p className={`text-sm mt-1 flex items-center gap-1 ${subtitleColor}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}

export default SummaryCard