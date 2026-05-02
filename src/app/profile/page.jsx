"use client"
import React from "react";
import UpdateUserModal from '@/components/UpdateUserModal';
import { authClient } from "@/lib/auth-client";

const ProfilePage = () => {
  const userData = authClient.useSession();
    const user = userData?.data?.user;
    

    if (!user) {
        return (
            <div className="text-center p-10">
                Loading profile...
            </div>
        );
    }
    
    return (
        <div className="card bg-base-100 w-full shadow-sm">
            <figure className="px-10 pt-10">
                <img
                    src={user.image}
                    alt="User"
                    className="rounded-full"
                />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{user.name}</h2>
                <p>{user.email}</p>

                <div className="card-actions">
                    <UpdateUserModal/>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
