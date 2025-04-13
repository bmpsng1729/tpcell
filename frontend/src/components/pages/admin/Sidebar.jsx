import { NavLink } from 'react-router-dom'
import {
  ChartBarIcon,
  UsersIcon,
  BuildingOfficeIcon,
  CalendarIcon,
  DocumentChartBarIcon,
} from '@heroicons/react/24/outline'

const Sidebar = () => {
  const navItems = [
    { name: 'Dashboard', icon: ChartBarIcon, path: '/admin/dashboard' },
    { name: 'Students', icon: UsersIcon, path: '/admin/students' },
    { name: 'Companies', icon: BuildingOfficeIcon, path: '/admin/companies' },
    { name: 'Drives', icon: CalendarIcon, path: '/admin/drives' },
    { name: 'Reports', icon: DocumentChartBarIcon, path: '/admin/reports' },
  ]

  return (
    <div className="w-64 bg-white shadow-sm">
      <div className="p-4 border-b border-secondary-200">
        <h2 className="text-xl font-bold text-primary-700">Placement Cell</h2>
      </div>
      <nav className="p-4">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center px-4 py-3 rounded-lg text-sm font-medium ${
                    isActive
                      ? 'bg-primary-100 text-primary-700'
                      : 'text-secondary-600 hover:bg-secondary-100'
                  }`
                }
              >
                <item.icon className="h-5 w-5 mr-3" />
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar