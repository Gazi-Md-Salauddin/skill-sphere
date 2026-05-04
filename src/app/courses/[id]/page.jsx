import React from "react";
import Link from "next/link";

const CourseDetailsPage = async ({ params }) => {
    const { id } = await params;
    const res = await fetch("https://skill-sphere-virid.vercel.app/data.json");
    const courses = await res.json();

    const course = courses.find(c => c.id == id);

    const curriculum = [
        "Course Introduction & Overview",
        "Understanding the Fundamentals",
        "Core Concepts and Strategies",
        "Practical Tools & Techniques",
        "Advanced Strategies & Best Practices",
        "Hands-on Projects & Case Studies",
        "Common Challenges and Solutions",
        "Industry Best Practices",
        "Final Project & Assessment",
        "Course Summary & Next Steps"
    ];

    return (
        <div className="my-4 px-4">
            <div className="card bg-base-100 w-full shadow-sm">
                <figure>
                    <img src={course.image} alt={course.title} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {course?.title}
                        <div className="badge bg-purple-500 text-white">
                            {course.category}
                        </div>
                    </h2>
                    <p>{course.description}</p>
                    <p>Level: {course.level}</p>
                    <p>Duration: {course.duration}</p>
                    <p className="flex gap-2">
                        Instructor:{" "}
                        <span className="text-purple-500">
                            {course.instructor}
                        </span>
                    </p>
                </div>
            </div>
            <div className="mt-6">
                <h2 className="text-xl font-bold my-4">Course Curriculum</h2>
                {curriculum.map((item, index) => (
                  <div
                    key={index}
                    className="card flex items-start gap-4 p-4 rounded-2xl shadow-sm hover:bg-gray-50 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-xl bg-violet-100  flex items-center justify-center ">
                      <span className="text-purple-600  font-medium text-sm">
                        {index + 1}
                      </span>
                    </div>
                    <div className="flex-1 pt-1">
                      <p className="text-gray-700  group-hover:text-purple-600  transition-colors">
                        {item}
                      </p>
                    </div>
                   
                  </div>
                ))}
                
            </div>
        </div>
    );
};

export default CourseDetailsPage;
