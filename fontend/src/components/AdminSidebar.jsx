import { Menu, X, LayoutDashboard, Building2, Calendar, Users, Tag, LogOut } from 'lucide-react'

const AdminSidebar = ({ activeTab, setActiveTab, sidebarOpen, setSidebarOpen }) => {
  const menuItems = [
    { id: 'overview', label: 'Tổng Quan', icon: LayoutDashboard },
    { id: 'rooms', label: 'Quản Lý Phòng', icon: Building2 },
    { id: 'bookings', label: 'Đặt Phòng', icon: Calendar },
    { id: 'users', label: 'Khách Hàng', icon: Users },
    { id: 'categories', label: 'Danh Mục', icon: Tag },
  ]

  return (
    <div className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-gradient-to-b from-blue-900 to-blue-800 text-white transition-all duration-300 flex flex-col fixed h-screen z-30 left-0 top-0`}>
      {/* Header */}
      <div className="p-4 border-b border-blue-700 flex items-center justify-between">
        <div className={`font-bold text-xl whitespace-nowrap ${sidebarOpen ? 'block' : 'hidden'}`}>
          🏨 Hotel Admin
        </div>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 hover:bg-blue-700 rounded-lg transition flex-shrink-0"
        >
          {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {menuItems.map(item => {
          const Icon = item.icon
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                activeTab === item.id
                  ? 'bg-white text-blue-900 font-semibold shadow-lg'
                  : 'hover:bg-blue-700 text-white'
              }`}
              title={!sidebarOpen ? item.label : ''}
            >
              <Icon size={20} className="flex-shrink-0" />
              <span className={`${sidebarOpen ? 'block' : 'hidden'} whitespace-nowrap`}>
                {item.label}
              </span>
            </button>
          )
        })}
      </nav>

      {/* Logout Button */}
      <div className="p-4 border-t border-blue-700">
        <button className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-lg hover:bg-red-600 transition text-white" title="Đăng Xuất">
          <LogOut size={20} className="flex-shrink-0" />
          <span className={`${sidebarOpen ? 'block' : 'hidden'} whitespace-nowrap`}>Đăng Xuất</span>
        </button>
      </div>
    </div>
  )
}

export default AdminSidebar
