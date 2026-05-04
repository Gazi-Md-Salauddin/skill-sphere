import React from "react";
import Link from "next/link";
import { IoMdStarOutline } from "react-icons/io";

const TrendingCourses = async () => {
    const res = await fetch("https://skill-sphere-virid.vercel.app/data.json");
    const courses = await res.json();
    const trendingcourses = courses.slice(0, 3);

    return (
        <div>
            <div className="flex justify-between items-center my-5 mx-4">
                <h1 className="text-2xl font-bold">Trending Courses</h1>
            </div>
            {trendingcourses.map(course => (
                <div className="card bg-base-100 w-full shadow-sm mx-auto">
                    <figure>
                        <img src={course.image} alt={course.title} />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {course.title}
                            <div className="badge bg-purple-500 text-white">
                                {course.category}
                            </div>
                        </h2>
                        <p className="flex gap-2 items-center">
                            {course.rating}
                            <IoMdStarOutline />
                        </p>
                        <div className="flex justify-between items-center">
                            <p>{course.instructor}</p>
                            <Link href={`/courses/${course.id}`}>
                                <button className="btn btn-outline">
                                    View Details
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TrendingCourses;
