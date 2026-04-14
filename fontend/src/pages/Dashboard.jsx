import { useState } from 'react'
import AdminSidebar from '../components/AdminSidebar'
import DashboardStats from '../components/DashboardStats'
import RoomManagement from '../components/RoomManagement'
import BookingManagement from '../components/BookingManagement'
import UserManagement from '../components/UserManagement'
import CategoryManagement from '../components/CategoryManagement'

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview')
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Main Content */}
      <div className={`flex-1 overflow-auto transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-20'}`}>
        {/* Header */}
        <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
          <div className="px-6 py-4 flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-800">
              {activeTab === 'overview' && 'Tổng Quan'}
              {activeTab === 'rooms' && 'Quản Lý Phòng'}
              {activeTab === 'bookings' && 'Quản Lý Đặt Phòng'}
              {activeTab === 'users' && 'Quản Lý Khách Hàng'}
              {activeTab === 'categories' && 'Quản Lý Danh Mục'}
            </h1>
            <div className="flex items-center gap-4">
              <div className="text-sm text-gray-600">
                {new Date().toLocaleDateString('vi-VN')}
              </div>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-6">
          {activeTab === 'overview' && <DashboardStats />}
          {activeTab === 'rooms' && <RoomManagement />}
          {activeTab === 'bookings' && <BookingManagement />}
          {activeTab === 'users' && <UserManagement />}
          {activeTab === 'categories' && <CategoryManagement />}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
