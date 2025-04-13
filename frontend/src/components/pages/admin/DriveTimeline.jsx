import { CheckCircleIcon, ClockIcon, CalendarIcon } from '@heroicons/react/24/outline'

const DriveTimeline = () => {
  const drives = [
    {
      id: 1,
      company: 'Microsoft',
      date: '2023-11-15',
      status: 'completed',
      offers: 24,
    },
    {
      id: 2,
      company: 'Google',
      date: '2023-12-05',
      status: 'upcoming',
      offers: 0,
    },
    {
      id: 3,
      company: 'Amazon',
      date: '2023-10-28',
      status: 'completed',
      offers: 18,
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-secondary-800">Drive Schedule</h3>
        <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-sm md:text-base">
          + Schedule Drive
        </button>
      </div>
      
      <div className="space-y-4">
        {drives.map((drive) => (
          <div key={drive.id} className="flex items-start p-4 rounded-lg border border-secondary-200 hover:shadow-sm transition-shadow">
            <div className="flex-shrink-0 mt-1 mr-4">
              {drive.status === 'completed' ? (
                <CheckCircleIcon className="h-6 w-6 text-accent-500" />
              ) : (
                <ClockIcon className="h-6 w-6 text-amber-500" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-center">
                <p className="text-sm font-medium text-secondary-900 truncate">{drive.company}</p>
                <span className="ml-2 text-xs text-secondary-500">{drive.date}</span>
              </div>
              <p className="text-sm text-secondary-500 mt-1">
                {drive.status === 'completed' ? (
                  <span className="inline-flex items-center">
                    <span className="mr-1">Made {drive.offers} offers</span>
                    <span className="h-2 w-2 rounded-full bg-accent-500"></span>
                  </span>
                ) : (
                  <span className="inline-flex items-center">
                    <span className="mr-1">Upcoming drive</span>
                    <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse"></span>
                  </span>
                )}
              </p>
            </div>
            <button className="ml-4 px-3 py-1 bg-white border border-secondary-300 text-sm rounded-md hover:bg-secondary-50 transition-colors">
              {drive.status === 'completed' ? 'View Results' : 'Edit'}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DriveTimeline