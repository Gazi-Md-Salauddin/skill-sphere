"use client"
import React from "react";
import { authClient } from '@/lib/auth-client';
import { FaGoogle } from "react-icons/fa";
import Link from 'next/link';
import { toast } from 'react-toastify';

const LoginPage = () => {
    const onSubmit = async (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        const { data, error } = await authClient.signIn.email({
            email,
            password,
            callbackURL: '/'
        });
        if (error) {
          toast.error(error.message)
            // alert("Error Login");
        }
        if (data) {
          toast.success("Login Successfully")
            // alert("Login Successfully");
        }
    };
    
    const handleGoogleLogin = async() => {
      await authClient.signIn.social({
        provider: "google",
      });
    };
    
    return (
        <form className="fieldset bg-base-200 border-base-300 rounded-box w-xs mx-auto border p-4 my-6" onSubmit={onSubmit}>
            <h2 className="fieldset-legend text-2xl font-bold">Login</h2>

            <label className="label">Email</label>
            <input
                type="email"
                name="email"
                className="input"
                placeholder="Enter your Email"
            />

            <label className="label">Password</label>
            <input
                type="password"
                name="password"
                className="input"
                placeholder="Enter your Password"
            />

            <button className="btn bg-purple-500 text-white mt-4">Login</button>
            <p className="text-center my-6">OR</p>
            <button onClick={handleGoogleLogin} className="btn btn-outline" type="button"><FaGoogle />Login with Google</button>
            <p className="flex gap-2 text-center justify-center my-4">Create New Account<Link href={"/register"} className="text-blue-500">Register</Link></p>
        </form>
    );
};

export default LoginPage;
