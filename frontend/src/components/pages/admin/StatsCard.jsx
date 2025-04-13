const StatsCard = ({ title, value, change, icon: Icon, color }) => {
    return (
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-secondary-500">{title}</p>
            <p className="mt-1 text-3xl font-semibold text-secondary-900">
              {value}
            </p>
            <p
              className={`mt-1 text-sm ${
                change >= 0 ? 'text-accent-600' : 'text-red-600'
              }`}
            >
              {change >= 0 ? '↑' : '↓'} {Math.abs(change)}% from last year
            </p>
          </div>
          <div
            className={`p-3 rounded-full ${color.bg} ${color.text} bg-opacity-20`}
          >
            <Icon className="h-6 w-6" />
          </div>
        </div>
      </div>
    )
  }
  
  export default StatsCard