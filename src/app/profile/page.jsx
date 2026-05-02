import React from "react";

const page = () => {
    return (
        <div className="card bg-base-100 w-full shadow-sm">
            <figure className="px-10 pt-10">
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt=""
                    className="rounded-full"
                />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Title</h2>

                <div className="card-actions">
                    <button className="btn btn-primary">Update Profile</button>
                </div>
            </div>
        </div>
    );
};

export default page;
