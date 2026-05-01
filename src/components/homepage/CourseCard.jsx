import React from "react";
import { IoMdStarOutline } from "react-icons/io";

const CourseCard = ({ course }) => {
    return (
        <div>
            <div className="card bg-base-100 shadow-sm grid grid-cols-1 md:grid grid-cols-3 gap-3">
                <figure>
                    <img src={course.image} alt={course.title} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {course.title}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p className="flex gap-2 items-center">
                        {course.rating}
                        <IoMdStarOutline />
                    </p>
                    <div className="flex justify-between items-center">
                        <p>{course.instructor}</p>
                        <button className="btn btn-outline">
                            View Details
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;
