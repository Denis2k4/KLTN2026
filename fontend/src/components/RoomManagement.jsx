import { Plus, Edit2, Trash2, Eye, Search } from 'lucide-react'
import { useState } from 'react'

const RoomManagement = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [rooms, setRooms] = useState([
    { id: 1, number: '101', type: 'Phòng Đơn', capacity: 1, price: '250.000đ', status: 'Rỗi', category: 'Tiêu chuẩn' },
    { id: 2, number: '102', type: 'Phòng Đôi', capacity: 2, price: '350.000đ', status: 'Đang sử dụng', category: 'Tiêu chuẩn' },
    { id: 3, number: '201', type: 'Phòng VIP', capacity: 4, price: '750.000đ', status: 'Rỗi', category: 'Cao cấp' },
    { id: 4, number: '202', type: 'Suite', capacity: 4, price: '1.000.000đ', status: 'Bảo trì', category: 'Cao cấp' },
    { id: 5, number: '301', type: 'Phòng Đôi', capacity: 2, price: '350.000đ', status: 'Rỗi', category: 'Tiêu chuẩn' },
    { id: 6, number: '302', type: 'Phòng Đơn', capacity: 1, price: '250.000đ', status: 'Đang sử dụng', category: 'Tiêu chuẩn' },
  ])

  const filteredRooms = rooms.filter(room =>
    room.number.includes(searchTerm) || room.type.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const getStatusColor = (status) => {
    switch (status) {
      case 'Rỗi':
        return 'bg-green-100 text-green-800'
      case 'Đang sử dụng':
        return 'bg-blue-100 text-blue-800'
      case 'Bảo trì':
        return 'bg-orange-100 text-orange-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div>
      {/* Header with Add Button */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Quản Lý Phòng</h2>
        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition font-semibold">
          <Plus size={20} />
          Thêm Phòng Mới
        </button>
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-3 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Tìm kiếm theo số phòng hoặc loại..."
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
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Phòng</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Loại</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Sức chứa</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Danh mục</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Giá tiền</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Trạng thái</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Hành động</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredRooms.map(room => (
                <tr key={room.id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4">
                    <span className="font-semibold text-gray-800 bg-gray-100 px-3 py-1 rounded">
                      {room.number}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-700">{room.type}</td>
                  <td className="px-6 py-4 text-gray-700">{room.capacity} người</td>
                  <td className="px-6 py-4">
                    <span className="text-sm bg-blue-50 text-blue-700 px-3 py-1 rounded">
                      {room.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-800">{room.price}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(room.status)}`}>
                      {room.status}
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
        <p className="text-sm text-gray-600">Hiển thị {filteredRooms.length} trong {rooms.length} phòng</p>
        <div className="flex gap-2">
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">Trước</button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">1</button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">2</button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">Tiếp</button>
        </div>
      </div>
    </div>
  )
}

export default RoomManagement
