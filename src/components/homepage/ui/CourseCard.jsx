import React from "react";
import { IoMdStarOutline } from "react-icons/io";
import Link from "next/link";

const CourseCard = ({ course }) => {
    return (
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
    );
};

export default CourseCard;
