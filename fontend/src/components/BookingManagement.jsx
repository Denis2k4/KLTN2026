import { Plus, Eye, Check, X, Search, Filter } from 'lucide-react'
import { useState } from 'react'

const BookingManagement = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')
  const [bookings, setBookings] = useState([
    { id: 'BK001', guest: 'Nguyễn Văn A', room: '101', checkIn: '2026-04-12', checkOut: '2026-04-14', nights: 2, total: '500.000đ', status: 'Đã Check-in', payment: 'Đã thanh toán' },
    { id: 'BK002', guest: 'Trần Thị B', room: '205', checkIn: '2026-04-13', checkOut: '2026-04-15', nights: 2, total: '700.000đ', status: 'Chờ Check-in', payment: 'Chờ thanh toán' },
    { id: 'BK003', guest: 'Lê Văn C', room: '310', checkIn: '2026-04-11', checkOut: '2026-04-12', nights: 1, total: '350.000đ', status: 'Đã Check-out', payment: 'Đã thanh toán' },
    { id: 'BK004', guest: 'Phạm Thị D', room: '102', checkIn: '2026-04-12', checkOut: '2026-04-13', nights: 1, total: '300.000đ', status: 'Đã Check-in', payment: 'Đã thanh toán' },
    { id: 'BK005', guest: 'Hoàng Minh E', room: '301', checkIn: '2026-04-14', checkOut: '2026-04-16', nights: 2, total: '700.000đ', status: 'Chờ Check-in', payment: 'Đã thanh toán' },
  ])

  const filteredBookings = bookings.filter(booking => {
    const matchesSearch = booking.guest.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.id.includes(searchTerm) ||
      booking.room.includes(searchTerm)
    const matchesStatus = filterStatus === 'all' || booking.status === filterStatus

    return matchesSearch && matchesStatus
  })

  const getStatusColor = (status) => {
    switch (status) {
      case 'Đã Check-in':
        return 'bg-blue-100 text-blue-800'
      case 'Chờ Check-in':
        return 'bg-yellow-100 text-yellow-800'
      case 'Đã Check-out':
        return 'bg-green-100 text-green-800'
      case 'Hủy':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getPaymentColor = (payment) => {
    return payment === 'Đã thanh toán' ? 'text-green-600' : 'text-orange-600'
  }

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Quản Lý Đặt Phòng</h2>
        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition font-semibold">
          <Plus size={20} />
          Thêm Đặt Phòng
        </button>
      </div>

      {/* Search and Filter */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="relative md:col-span-2">
          <Search className="absolute left-3 top-3 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Tìm kiếm theo tên khách, mã đặt phòng hoặc phòng..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="flex items-center gap-2">
          <Filter size={20} className="text-gray-600" />
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          >
            <option value="all">Tất cả trạng thái</option>
            <option value="Chờ Check-in">Chờ Check-in</option>
            <option value="Đã Check-in">Đã Check-in</option>
            <option value="Đã Check-out">Đã Check-out</option>
          </select>
        </div>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-lg p-4 border-l-4 border-blue-500">
          <p className="text-gray-600 text-sm">Tổng Đặt Phòng</p>
          <p className="text-2xl font-bold text-blue-600 mt-2">{bookings.length}</p>
        </div>
        <div className="bg-white rounded-lg p-4 border-l-4 border-yellow-500">
          <p className="text-gray-600 text-sm">Chờ Check-in</p>
          <p className="text-2xl font-bold text-yellow-600 mt-2">{bookings.filter(b => b.status === 'Chờ Check-in').length}</p>
        </div>
        <div className="bg-white rounded-lg p-4 border-l-4 border-blue-400">
          <p className="text-gray-600 text-sm">Đang Ở</p>
          <p className="text-2xl font-bold text-blue-400 mt-2">{bookings.filter(b => b.status === 'Đã Check-in').length}</p>
        </div>
        <div className="bg-white rounded-lg p-4 border-l-4 border-green-500">
          <p className="text-gray-600 text-sm">Đã Check-out</p>
          <p className="text-2xl font-bold text-green-600 mt-2">{bookings.filter(b => b.status === 'Đã Check-out').length}</p>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-100 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Mã ĐP</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Khách</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Phòng</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Check-in</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Check-out</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Đêm</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Tổng Tiền</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Trạng Thái</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">T.Toán</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Hành động</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredBookings.map(booking => (
                <tr key={booking.id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4">
                    <span className="font-semibold text-blue-600">{booking.id}</span>
                  </td>
                  <td className="px-6 py-4 text-gray-700">{booking.guest}</td>
                  <td className="px-6 py-4">
                    <span className="font-semibold text-gray-800 bg-gray-100 px-3 py-1 rounded">
                      {booking.room}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-700">{booking.checkIn}</td>
                  <td className="px-6 py-4 text-gray-700">{booking.checkOut}</td>
                  <td className="px-6 py-4 text-gray-700">{booking.nights}</td>
                  <td className="px-6 py-4 font-semibold text-gray-800">{booking.total}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(booking.status)}`}>
                      {booking.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`text-sm font-semibold ${getPaymentColor(booking.payment)}`}>
                      {booking.payment}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button className="text-blue-600 hover:text-blue-800 transition" title="Xem chi tiết">
                        <Eye size={18} />
                      </button>
                      <button className="text-green-600 hover:text-green-800 transition" title="Check-in">
                        <Check size={18} />
                      </button>
                      <button className="text-red-600 hover:text-red-800 transition" title="Hủy">
                        <X size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="mt-6 flex items-center justify-between">
        <p className="text-sm text-gray-600">Hiển thị {filteredBookings.length} trong {bookings.length} đặt phòng</p>
        <div className="flex gap-2">
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">Trước</button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">1</button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">Tiếp</button>
        </div>
      </div>
    </div>
  )
}

export default BookingManagement
