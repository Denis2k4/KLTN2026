import React from 'react'

const LeadershipTeam = () => {
  const team = [
    { name: 'Nguyễn Văn A', title: 'Founder & CEO', image: 'https://i.pravatar.cc/150?img=1' },
    { name: 'Trần Thị B', title: 'COO', image: 'https://i.pravatar.cc/150?img=2' },
    { name: 'Phạm Văn C', title: 'Head of Operations', image: 'https://i.pravatar.cc/150?img=3' },
    { name: 'Lê Thị D', title: 'Director of Marketing', image: 'https://i.pravatar.cc/150?img=4' },
  ]

  return (
    <div className="mb-12 sm:mb-16 md:mb-20">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 sm:mb-10 md:mb-12 text-center">
        Meet Our <span className="text-[#c6a46a]">Leadership Team</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
        {team.map((member, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg sm:rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-40 sm:h-48 md:h-64 object-cover"
            />
            <div className="p-3 sm:p-4 md:p-6 text-center">
              <h3 className="font-bold text-base sm:text-lg text-gray-900 mb-1 sm:mb-2">{member.name}</h3>
              <p className="text-[#c6a46a] font-semibold text-xs sm:text-sm md:text-base">{member.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LeadershipTeam
