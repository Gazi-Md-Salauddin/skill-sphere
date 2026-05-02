import React from "react";
import { BiEdit } from "react-icons/bi";

const UpdateUserModal = () => {
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
                    <form method="dialog"
                        className="fieldset bg-base-200 border-base-300 rounded-box w-full mx-auto border p-4 my-6"
                        
                    >
                        <h2 className="fieldset-legend text-2xl font-bold">
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

                        <button className="btn bg-purple-500 text-white mt-4">
                            Save
                        </button>
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                </div>
            </dialog>
        </div>
    );
};

export default UpdateUserModal;
