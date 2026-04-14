import React from 'react'

const BookingProgressBar = ({ step }) => {
  return (
    <div className="flex items-center justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-4">
      {[1, 2].map((s) => (
        <React.Fragment key={s}>
          <div
            className={`w-9 sm:w-12 h-9 sm:h-12 rounded-full flex items-center justify-center font-bold text-sm sm:text-base
              ${
                step >= s
                  ? 'bg-[#c6a46a] text-black'
                  : 'bg-gray-300 text-gray-600'
              } 
              transition-all duration-300`}
          >
            {s === 1 ? '🏨' : '💳'}
          </div>
          {s === 1 && (
            <div
              className={`w-8 sm:w-16 h-1 ${
                step >= 2 ? 'bg-[#c6a46a]' : 'bg-gray-300'
              } transition-all duration-300`}
            ></div>
          )}
        </React.Fragment>
      ))}
    </div>
  )
}

export default BookingProgressBar
