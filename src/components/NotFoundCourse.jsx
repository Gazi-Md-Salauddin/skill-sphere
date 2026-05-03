import React from "react";
import NotFoundImg from "@/assets/not-found-image.jpg";
import Image from 'next/image'

const NotFoundCourse = () => {
    return (
        <div className="mt-8">
            <div className="flex flex-col justify-center items-center bg-base-100 w-full">
                <div className="card-body">
                    <h2 className="card-title text-2xl">No Courses Found!</h2>
                </div>
                <figure>
                    <Image src={NotFoundImg} alt="Not Found Image" />
                </figure>
            </div>
        </div>
    );
};

export default NotFoundCourse;
