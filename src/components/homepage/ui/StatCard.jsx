import React from 'react'

const StatCard = () => {
  return (
    <div className="my-8">
      <div className="bg-purple-500 text-white md:flex justify-between px-4 py-6">
        <div className="text-center py-4">
          <h2 className="text-2xl font-bold">2K+</h2>
          <p>Video Courses</p>
        </div>
        <div className="text-center py-4">
          <h2 className="text-2xl font-bold">5K+</h2>
          <p>Online Courses</p>
        </div>
        <div className="text-center py-4">
          <h2 className="text-2xl font-bold">250+</h2>
          <p>Tutors</p>
        </div>
        <div className="text-center py-4">
          <h2 className="text-2xl font-bold">2K+</h2>
          <p>Verified Courses</p>
        </div>
      </div>
    </div>
  )
}

export default StatCard