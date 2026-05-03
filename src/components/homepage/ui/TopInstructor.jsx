import React from "react";
import { IoMdStarOutline } from "react-icons/io";

const instructors = [
    {
        id: 1,
        name: "Daniel Carter",
        expertise: "Web Development",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=1287&auto=format&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 2,
        name: "Sophia Wilson",
        expertise: "UI/UX Design",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60"
    },
    {
        id: 3,
        name: "Michael Brown",
        expertise: "Data Science",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=60"
    }
];

const TopInstructor = () => {
    return (
        <div className="px-4 mt-10">
            <div>
                <h2 className="text-2xl font-bold">Top Instructors</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-6">
                {instructors.map(ins => (
                    <div
                        key={ins.id}
                        className="card bg-base-100 w-full shadow-sm"
                    >
                        <figure className="px-10 pt-10">
                            <img
                                src={ins.image}
                                alt="Instructor"
                                className="w-24 h-24 rounded-full object-cover"
                            />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-2xl">{ins.name}</h2>
                            <p>{ins.expertise}</p>

                            <p className="flex items-center gap-2">
                                <IoMdStarOutline />
                                {ins.rating}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopInstructor;
