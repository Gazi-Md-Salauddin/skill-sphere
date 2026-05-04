import React from "react";
import CourseCard from "@/components/homepage/ui/CourseCard";
import SearchField from "@/components/SearchField";
import { getCourses } from "@/lib/course";
import NotFoundCourse from "@/components/NotFoundCourse";

const CoursesPage = async ({ searchParams }) => {
    // const res = await fetch("https://skill-sphere-virid.vercel.app/data.json");
    // const courses = await res.json();

    const sp = await searchParams;
    const courses = await getCourses(sp.search);

    return (
        <div className="my-6">
            <div className="text-center my-6">
                <h2 className="text-2xl font-bold">
                    All Courses
                </h2>
                <p>Explore All Available Courses</p>
            </div>
            <SearchField />

            {courses.length === 0 ? (
                <NotFoundCourse />
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 px-4 mt-6">
                    {courses.map(course => (
                        <CourseCard key={course.id} course={course} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default CoursesPage;
