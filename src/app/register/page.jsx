"use client";
import React from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const RegisterPage = () => {
    const onSubmit = async e => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const image = e.target.image.value;
        const password = e.target.password.value;

        const { data, error } = await authClient.signUp.email({
            name,
            email,
            image,
            password,
            callbackURL: "/login"
        });
        if (error) {
            alert(error.message);
        }
        if (data) {
            alert("Successfully Register");
        }
    };
    return (
        <form
            className="fieldset bg-base-200 border-base-300 rounded-box w-xs mx-auto border p-4 my-6"
            onSubmit={onSubmit}
        >
            <h2 className="fieldset-legend text-2xl font-bold">Register</h2>

            <label className="label">Name</label>
            <input
                type="text"
                name="name"
                className="input"
                placeholder="Enter your Name"
            />
            <label className="label">Email</label>
            <input
                type="email"
                name="email"
                className="input"
                placeholder="Enter your Email"
            />

            <label className="label">Image URL</label>
            <input
                className="input"
               
                name="image"
                type="text"
                placeholder="Image URL"
            />

            <label className="label">Password</label>
            <input
                type="password"
                name="password"
                className="input"
                placeholder="Enter your Password"
            />

            <button className="btn bg-purple-500 text-white mt-4">
                Register
            </button>
        </form>
    );
};

export default RegisterPage;
