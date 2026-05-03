"use client";
import React from "react";
import UpdateUserModal from "@/components/UpdateUserModal";
import { authClient } from "@/lib/auth-client";

const ProfilePage = () => {
    const userData = authClient.useSession();
    const user = userData?.data?.user;

    if (!user) {
        return (
            <div className="text-center p-10 flex justify-center items-center">
                <span className="loading loading-spinner text-neutral"></span>
            </div>
        );
    }

    return (
        <div className="card bg-base-100 w-full shadow-sm mt-6 px-4">
            <figure className="px-10 pt-10">
                {user?.image ? (
                    <img
                        src={user?.image}
                        alt="User"
                        className="border rounded-full"
                    />
                ) : (
                    <div className="bg-neutral text-neutral-content flex items-center justify-center w-20 h-20 rounded-full">
                        <span >
                            {user?.name
                                ? user.name.charAt(0).toUpperCase()
                                : "U"}
                        </span>
                    </div>
                )}
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{user.name}</h2>
                <p>{user.email}</p>

                <div className="card-actions">
                    <UpdateUserModal />
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
