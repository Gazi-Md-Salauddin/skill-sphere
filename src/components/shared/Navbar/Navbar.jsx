import React from "react";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="flex py-2 justify-between bg-base-100 shadow-sm">
            {/*dropdown menu*/}
            <div className="pl-4 md:hidden">
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost btn-circle md:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {" "}
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h7"
                            />{" "}
                        </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                    >
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/courses">Courses</Link>
                        </li>
                        <li>
                            <Link href="/profile">Profile</Link>
                        </li>
                        <div className="flex gap-2">
                            <Link href="/login" className="btn">Login</Link>
                            <Link href="/register" className="btn">Register</Link>
                        </div>
                    </ul>
                </div>
            </div>

            {/*Logo*/}
            <div className="flex justify-center md:pl-4">
                <a className="btn btn-ghost text-xl">SkillSphere</a>
            </div>

            {/*Navbar for large screen*/}
            <div className="hidden md:flex justify-center">
                <ul className="flex gap-3 items-center ml-8">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/courses">Courses</Link>
                    </li>
                    <li>
                        <Link href="/profile">My Profile</Link>
                    </li>
                </ul>
            </div>

            {/*Search*/}
            <div className="pr-4 md:flex justify-between gap-2">
                <input
                    type="text"
                    placeholder="Search"
                    className="input input-bordered w-24 md:w-auto"
                />
                <div className="hidden md:flex gap-2 md:pr-4">
                    <button className="btn">Login</button>
                    <button className="btn">Register</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
