"use client"
import React from "react";
import { authClient } from '@/lib/auth-client'

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
            alert("Error Login:");
        }
        if (data) {
            alert("Login Successfully");
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
            <button onClick={handleGoogleLogin} className="btn btn-outline">Login with Google</button>
        </form>
    );
};

export default LoginPage;
