import React from 'react';
import CourseCard from '@/components/homepage/CourseCard'

const CoursesPage = async() => {
  const res = await fetch('https://skill-sphere-virid.vercel.app/data.json')
  const courses = await res.json();
  return (
    <div>
      <h2 className="text-xl font-bold text-center">All Courses</h2>
      
      <div>
        {courses.map((course) => <CourseCard key={course.id} course={course}/>)}
      </div>
    </div>
  )
}

export default CoursesPage