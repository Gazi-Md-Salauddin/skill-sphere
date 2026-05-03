"use client";
import React from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const SearchField = ({courses = []}) => {
    const [search, setSearch] = useState("");
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathName = usePathname();

    const handleSearch = () => {
        const params = new URLSearchParams(searchParams);

        if (search) {
            params.set("search", search);
        } else {
            params.delete("search");
        }
        router.push(`${pathName}?${params.toString()}`);
    };

    return (
        <div className="flex justify-center items-center">
            <label className="input">
                <svg
                    className="h-[1em] opacity-50"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                >
                    <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                        fill="none"
                        stroke="currentColor"
                    >
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                    </g>
                </svg>
                <input onChange={(e) => setSearch(e.target.value)} value={search} type="search" required placeholder="Search" />
                <button onClick={handleSearch} className="btn bg-purple-500 text-white">Search</button>
            </label>
        </div>
    );
};

export default SearchField;
