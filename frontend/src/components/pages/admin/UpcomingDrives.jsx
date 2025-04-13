const drives = [
    {
      id: 1,
      company: 'TCS',
      date: '2023-11-10',
      roles: 'Software Engineer, Data Analyst',
      eligibility: '7+ CGPA, No Backlogs',
    },
    {
      id: 2,
      company: 'Infosys',
      date: '2023-11-15',
      roles: 'System Engineer, Business Analyst',
      eligibility: '6.5+ CGPA',
    },
    {
      id: 3,
      company: 'Wipro',
      date: '2023-11-20',
      roles: 'Project Engineer, Consultant',
      eligibility: '7+ CGPA, No Backlogs',
    },
    {
      id: 4,
      company: 'IBM',
      date: '2023-11-25',
      roles: 'Associate Developer, Cloud Engineer',
      eligibility: '7.5+ CGPA',
    },
  ]
  
  const UpcomingDrives = () => {
    return (
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-secondary-800 mb-4">
          Upcoming Drives
        </h3>
        <div className="space-y-4">
          {drives.map((drive) => (
            <div key={drive.id} className="border-l-4 border-primary-500 pl-4 py-2">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-secondary-900">{drive.company}</h4>
                  <p className="text-sm text-secondary-500">{drive.date}</p>
                </div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent-100 text-accent-800">
                  {drive.eligibility}
                </span>
              </div>
              <p className="mt-1 text-sm text-secondary-600">
                <span className="font-medium">Roles:</span> {drive.roles}
              </p>
            </div>
          ))}
        </div>
      </div>
    )
  }
  
  export default UpcomingDrives