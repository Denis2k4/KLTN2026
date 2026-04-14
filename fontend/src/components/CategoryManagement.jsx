import { Plus, Edit2, Trash2, Eye, Search, Image as ImageIcon } from 'lucide-react'
import { useState } from 'react'

const CategoryManagement = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [categories, setCategories] = useState([
    { id: 1, name: 'Phòng Tiêu Chuẩn', description: 'Phòng cơ bản với đầy đủ tiện nghi', rooms: 24, price: '250.000đ', status: 'Hoạt động', image: '🏨' },
    { id: 2, name: 'Phòng Cao Cấp', description: 'Phòng cao cấp với tầm nhìn đẹp', rooms: 12, price: '750.000đ', status: 'Hoạt động', image: '✨' },
    { id: 3, name: 'Suite', description: 'Phòng suite sang trọng và rộng rãi', rooms: 6, price: '1.000.000đ', status: 'Hoạt động', image: '👑' },
    { id: 4, name: 'Phòng Gia Đình', description: 'Phòng dành cho gia đình nhiều người', rooms: 8, price: '1.500.000đ', status: 'Hoạt động', image: '👨‍👩‍👦' },
    { id: 5, name: 'Phòng VIP', description: 'Phòng VIP với dịch vụ đặc biệt', rooms: 4, price: '2.000.000đ', status: 'Hoạt động', image: '💎' },
  ])

  const filteredCategories = categories.filter(cat =>
    cat.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cat.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Quản Lý Danh Mục</h2>
        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition font-semibold">
          <Plus size={20} />
          Thêm Danh Mục
        </button>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white rounded-lg p-4 border-l-4 border-blue-500">
          <p className="text-gray-600 text-sm">Tổng Danh Mục</p>
          <p className="text-2xl font-bold text-blue-600 mt-2">{categories.length}</p>
        </div>
        <div className="bg-white rounded-lg p-4 border-l-4 border-green-500">
          <p className="text-gray-600 text-sm">Tất Cả Phòng</p>
          <p className="text-2xl font-bold text-green-600 mt-2">{categories.reduce((acc, cat) => acc + cat.rooms, 0)}</p>
        </div>
        <div className="bg-white rounded-lg p-4 border-l-4 border-purple-500">
          <p className="text-gray-600 text-sm">Đang Hoạt Động</p>
          <p className="text-2xl font-bold text-purple-600 mt-2">{categories.filter(c => c.status === 'Hoạt động').length}</p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-3 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Tìm kiếm theo tên hoặc mô tả..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>

      {/* Grid View */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {filteredCategories.map(category => (
          <div key={category.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
            {/* Image */}
            <div className="h-32 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-6xl">
              {category.image}
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-800">{category.name}</h3>
              <p className="text-gray-600 text-sm mt-2">{category.description}</p>

              {/* Details */}
              <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-gray-200">
                <div>
                  <p className="text-gray-600 text-xs">Số Phòng</p>
                  <p className="text-2xl font-bold text-blue-600">{category.rooms}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-xs">Giá Từ</p>
                  <p className="text-sm font-semibold text-green-600">{category.price}</p>
                </div>
              </div>

              {/* Status */}
              <span className="inline-block mt-4 px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                {category.status}
              </span>

              {/* Actions */}
              <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-200">
                <button className="flex-1 text-blue-600 hover:text-blue-800 transition font-semibold text-sm">
                  <Eye size={18} className="inline mr-1" /> Xem
                </button>
                <button className="flex-1 text-green-600 hover:text-green-800 transition font-semibold text-sm">
                  <Edit2 size={18} className="inline mr-1" /> Sửa
                </button>
                <button className="flex-1 text-red-600 hover:text-red-800 transition font-semibold text-sm">
                  <Trash2 size={18} className="inline mr-1" /> Xóa
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Table View */}
      <h3 className="text-xl font-bold text-gray-800 mb-4">Chi Tiết Danh Mục</h3>
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-100 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Tên Danh Mục</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Mô Tả</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Số Phòng</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Giá Tiền</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Trạng Thái</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Hành động</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredCategories.map(category => (
                <tr key={category.id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{category.image}</span>
                      <span className="font-semibold text-gray-800">{category.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-700 text-sm">{category.description}</td>
                  <td className="px-6 py-4">
                    <span className="font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded">
                      {category.rooms}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-semibold text-green-600">{category.price}</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                      {category.status}
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
    </div>
  )
}

export default CategoryManagement
