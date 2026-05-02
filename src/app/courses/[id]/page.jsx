import React from 'react';
import Link from 'next/link'

const CourseDetailsPage = async({params}) => {
  const {id} = await params
  const res = await fetch('https://skill-sphere-virid.vercel.app/data.json');
  const courses = await res.json();
  
  const course = courses.find(c => c.id == id)
  
  return (
    <div className="card bg-base-100 w-full shadow-sm">
  <figure>
    <img
      src={course.image}
      alt={course.title} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {course?.title}
      <div className="badge bg-purple-500 text-white">{course.category}</div>
    </h2>
    <p>{course.description}</p>
    <p>Level: {course.level}</p>
    <p>Duration: {course.duration}</p>
    <p>Instructor: {course.instructor}</p>
    <div className="card-actions justify-end">
      <Link href={"/"} className="badge badge-outline">Back</Link>
    </div>
  </div>
</div>
  )
}

export default CourseDetailsPage