import React from 'react';
import CourseCard from './CourseCard';
import Link from 'next/link'

const TopCourses = async() => {
  const res = await fetch('https://skill-sphere-virid.vercel.app/data.json');
  const courses = await res.json();
  const topcourses = courses.slice(0, 3)
  return (
    <div>
      <div className="flex justify-between items-center my-5 mx-4">
            <h1 className="text-2xl font-bold">Top Courses</h1>
            <Link href={"/courses"} className="text-blue-500">View All Courses</Link>
      </div>

            <div className="grid grid-cols-1 mx-4 md:grid-cols-3 gap-4">
                {topcourses.map(course => <CourseCard key={course.id} course={course} />)}
            </div>
        </div>
  )
}

export default TopCourses