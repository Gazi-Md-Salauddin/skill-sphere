import React from "react";

const LoginPage = () => {
    return (
        <form className="fieldset bg-base-200 border-base-300 rounded-box w-xs mx-auto border p-4 my-6">
            <h2 className="fieldset-legend text-2xl font-bold">Login</h2>

            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Enter your Email" />

            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Enter your Password" />

            <button className="btn bg-purple-500 text-white mt-4">Login</button>
        </form>
    );
};

export default LoginPage;
