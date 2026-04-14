import { TrendingUp, Users, DoorOpen, Calendar, DollarSign } from 'lucide-react'

const DashboardStats = () => {
  const stats = [
    {
      label: 'Tổng Doanh Thu',
      value: '145.000.000đ',
      icon: DollarSign,
      color: 'bg-gradient-to-br from-green-400 to-green-600',
      trend: '+12.5%'
    },
    {
      label: 'Khách Hàng',
      value: '2,847',
      icon: Users,
      color: 'bg-gradient-to-br from-blue-400 to-blue-600',
      trend: '+8.2%'
    },
    {
      label: 'Phòng Trống',
      value: '24',
      icon: DoorOpen,
      color: 'bg-gradient-to-br from-orange-400 to-orange-600',
      trend: '-3.1%'
    },
    {
      label: 'Đặt Phòng Hôm Nay',
      value: '18',
      icon: Calendar,
      color: 'bg-gradient-to-br from-purple-400 to-purple-600',
      trend: '+5.4%'
    }
  ]

  return (
    <div>
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {stats.map((stat, idx) => {
          const Icon = stat.icon
          return (
            <div key={idx} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
                  <p className="text-3xl font-bold text-gray-800 mt-2">{stat.value}</p>
                  <p className="text-green-600 text-sm mt-2 font-semibold">{stat.trend}</p>
                </div>
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <Icon size={24} className="text-white" />
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Recent Bookings & Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Bookings */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Đặt Phòng Gần Đây</h2>
          <div className="space-y-4">
            {[
              { id: 'BK001', guest: 'Nguyễn Văn A', room: '101', status: 'Đã Check-in', date: '2026-04-12' },
              { id: 'BK002', guest: 'Trần Thị B', room: '205', status: 'Đang xử lý', date: '2026-04-12' },
              { id: 'BK003', guest: 'Lê Văn C', room: '310', status: 'Đã Check-out', date: '2026-04-11' },
              { id: 'BK004', guest: 'Phạm Thị D', room: '102', status: 'Đã Check-in', date: '2026-04-12' },
            ].map(booking => (
              <div key={booking.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                <div>
                  <p className="font-semibold text-gray-800">{booking.guest}</p>
                  <p className="text-sm text-gray-600">Phòng: {booking.room} • {booking.date}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  booking.status === 'Đã Check-in' ? 'bg-green-100 text-green-800' :
                  booking.status === 'Đang xử lý' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {booking.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Room Status */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Tình Trạng Phòng</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
              <span className="text-gray-700 font-medium">Phòng Rỗi</span>
              <span className="text-2xl font-bold text-green-600">24</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
              <span className="text-gray-700 font-medium">Đang Sử Dụng</span>
              <span className="text-2xl font-bold text-blue-600">32</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-orange-50 rounded-lg">
              <span className="text-gray-700 font-medium">Bảo Trì</span>
              <span className="text-2xl font-bold text-orange-600">4</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg">
              <span className="text-gray-700 font-medium">Không Khả Dụng</span>
              <span className="text-2xl font-bold text-red-600">0</span>
            </div>
          </div>
        </div>
      </div>

      {/* Performance Chart */}
      <div className="mt-6 bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-lg font-bold text-gray-800 mb-4">Xu Hướng Doanh Thu</h2>
        <div className="h-64 bg-gray-50 rounded-lg flex items-end justify-around p-4">
          {[60, 75, 65, 85, 90, 78, 88].map((height, idx) => (
            <div key={idx} className="flex flex-col items-center gap-2">
              <div
                className="w-10 bg-gradient-to-t from-blue-500 to-blue-400 rounded-lg transition hover:from-blue-600 hover:to-blue-500"
                style={{ height: `${height * 2}px` }}
              />
              <span className="text-xs text-gray-600">T{idx + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DashboardStats
