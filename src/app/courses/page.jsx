import React from 'react';
import CourseCard from '@/components/homepage/CourseCard'

const CoursesPage = async() => {
  const res = await fetch('https://skill-sphere-virid.vercel.app/data.json')
  const courses = await res.json();
  return (
    <div className="my-6">
      <h2 className="text-xl font-bold text-center mb-6">All Courses</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {courses.map((course) => <CourseCard key={course.id} course={course}/>)}
      </div>
    </div>
  )
}

export default CoursesPage