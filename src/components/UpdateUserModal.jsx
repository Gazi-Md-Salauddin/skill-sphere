import React from "react";
import { BiEdit } from "react-icons/bi";
import { authClient } from '@/lib/auth-client'
import { toast } from 'react-toastify';

const UpdateUserModal = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;
    
    toast.success("Update User Successfully")
    
    await authClient.updateUser({
        name,
        image
    })
  };
    return (
        <div>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <button
                className="btn"
                onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                }
            >
                Update Profile
            </button>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog" onSubmit={onSubmit}
                        className="fieldset bg-base-200 border-base-300 rounded-box w-full mx-auto border p-4 my-6"
                        
                    >
                        <h2 className="flex gap-2 text-2xl font-bold">
                            <BiEdit/>Update User
                        </h2>

                        <label className="label">Name</label>
                        <input
                            type="text"
                            name="name"
                            className="input"
                            placeholder="Enter your Name"
                        />

                        <label className="label">Image URL</label>
                        <input
                            className="input"
                            name="image"
                            type="text"
                            placeholder="Image URL"
                        />

                        <button onClick={() =>
                    document.getElementById("my_modal_3").close()
                } type="submit" className="btn bg-purple-500 text-white mt-4">
                            Save
                        </button>
                        <button onClick={() =>
                    document.getElementById("my_modal_3").close()
                } className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                </div>
            </dialog>
        </div>
    );
};

export default UpdateUserModal;
