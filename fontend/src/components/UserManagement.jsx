import { Plus, Edit2, Trash2, Eye, Search, Mail, Phone } from 'lucide-react'
import { useState } from 'react'

const UserManagement = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [users, setUsers] = useState([
    { id: 1, name: 'Nguyễn Văn A', email: 'nguyenvan@gmail.com', phone: '0901234567', bookings: 5, status: 'Hoạt động', joinDate: '2025-01-15' },
    { id: 2, name: 'Trần Thị B', email: 'tranthib@gmail.com', phone: '0912345678', bookings: 3, status: 'Hoạt động', joinDate: '2025-02-20' },
    { id: 3, name: 'Lê Văn C', email: 'levanc@gmail.com', phone: '0923456789', bookings: 8, status: 'Hoạt động', joinDate: '2024-11-10' },
    { id: 4, name: 'Phạm Thị D', email: 'phamthid@gmail.com', phone: '0934567890', bookings: 2, status: 'Vô hiệu hóa', joinDate: '2025-03-05' },
    { id: 5, name: 'Hoàng Minh E', email: 'hoangminhe@gmail.com', phone: '0945678901', bookings: 12, status: 'Hoạt động', joinDate: '2024-10-22' },
    { id: 6, name: 'Đỗ Hải F', email: 'dohaif@gmail.com', phone: '0956789012', bookings: 1, status: 'Hoạt động', joinDate: '2025-04-01' },
  ])

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.phone.includes(searchTerm)
  )

  const getStatusColor = (status) => {
    return status === 'Hoạt động' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
  }

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Quản Lý Khách Hàng</h2>
        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition font-semibold">
          <Plus size={20} />
          Thêm Khách Hàng
        </button>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white rounded-lg p-4 border-l-4 border-blue-500">
          <p className="text-gray-600 text-sm">Tổng Khách Hàng</p>
          <p className="text-2xl font-bold text-blue-600 mt-2">{users.length}</p>
        </div>
        <div className="bg-white rounded-lg p-4 border-l-4 border-green-500">
          <p className="text-gray-600 text-sm">Đang Hoạt Động</p>
          <p className="text-2xl font-bold text-green-600 mt-2">{users.filter(u => u.status === 'Hoạt động').length}</p>
        </div>
        <div className="bg-white rounded-lg p-4 border-l-4 border-purple-500">
          <p className="text-gray-600 text-sm">Tổng Đặt Phòng</p>
          <p className="text-2xl font-bold text-purple-600 mt-2">{users.reduce((acc, u) => acc + u.bookings, 0)}</p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-3 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Tìm kiếm theo tên, email hoặc số điện thoại..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-100 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Tên</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Email</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Số Điện Thoại</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Đặt Phòng</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Ngày Tham Gia</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Trạng Thái</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Hành động</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredUsers.map(user => (
                <tr key={user.id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4">
                    <p className="font-semibold text-gray-800">{user.name}</p>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-gray-700">
                      <Mail size={16} className="text-blue-500" />
                      <span className="text-sm">{user.email}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-gray-700">
                      <Phone size={16} className="text-green-500" />
                      <span className="text-sm">{user.phone}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded">
                      {user.bookings}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-700 text-sm">{user.joinDate}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(user.status)}`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <button className="text-blue-600 hover:text-blue-800 transition" title="Xem chi tiết">
                        <Eye size={18} />
                      </button>
                      <button className="text-green-600 hover:text-green-800 transition" title="Chỉnh sửa">
                        <Edit2 size={18} />
                      </button>
                      <button className="text-red-600 hover:text-red-800 transition" title="Xóa">
                        <Trash2 size={18} />
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
        <p className="text-sm text-gray-600">Hiển thị {filteredUsers.length} trong {users.length} khách hàng</p>
        <div className="flex gap-2">
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">Trước</button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">1</button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">Tiếp</button>
        </div>
      </div>
    </div>
  )
}

export default UserManagement
