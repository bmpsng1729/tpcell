const CompanyStats = () => {
    // This would typically come from an API
    const companyData = [
      { name: 'Microsoft', visits: 5, offers: 32 },
      { name: 'Google', visits: 3, offers: 18 },
      { name: 'Amazon', visits: 4, offers: 25 },
      { name: 'Adobe', visits: 2, offers: 12 },
      { name: 'Goldman Sachs', visits: 2, offers: 15 },
    ]
  
    return (
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-secondary-800 mb-4">
          Top Recruiting Companies
        </h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-secondary-200">
            <thead>
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                  Company
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                  Campus Visits
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                  Offers Made
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-secondary-200">
              {companyData.map((company, index) => (
                <tr key={index}>
                  <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-secondary-900">
                    {company.name}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-secondary-500">
                    {company.visits}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-secondary-500">
                    {company.offers}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
  
  export default CompanyStats