import React from "react";

const NotFoundCourse = () => {
    return (
        <div>
            <div className="bg-base-100 w-full shadow-sm">
                <div className="card-body">
                    <h2 className="card-title">No Courses Found!</h2>
                    
                </div>
                <figure>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes"
                    />
                </figure>
            </div>
        </div>
    );
};

export default NotFoundCourse;
