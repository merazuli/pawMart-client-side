import React, { useContext, useState } from "react";
import { updateProfile } from "firebase/auth";
import { toast } from "react-toastify"; // optional: if you use react-toastify for notifications
import { auth, AuthContext } from "../provider/AuthProvider";


const Profile = () => {
    const { updateUserProfile, setUser, user } = useContext(AuthContext);
    console.log(user)
    // const [name, setName] = useState("");
    // const [photoURL, setPhotoURL] = useState("");
    const [loading, setLoading] = useState(false);

    const handleUpdate = async (e) => {
        e.preventDefault();
        // updateUserProfile()
        const name = e.target.name.value;
        const photo = e.target.photo.value;


        try {
            // Update in Firebase Auth
            await updateProfile(auth.currentUser, {
                displayName: name,
                photoURL: photo,
            });

            // Optional: Update in context (if needed)
            setUser(updateUserProfile({
                displayName: name,
                photoURL: photo,
            }))

            toast.success("✅ Profile updated successfully!");
        } catch (error) {
            console.error(error);
            toast.error("❌ Profile update failed!");
        } finally {
            setLoading(false);
        }


        // return updateUserProfile({ displayName: name, photoURL: photo })
        //     .then(() => {
        //         setUser({ ...user, displayName: name, photoURL: photo });
        //     })
        //     .catch(error => {
        //         console.log(error)
        //     })




    };

    return (
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-2xl p-6 mt-10">
            <h2 className="text-2xl font-semibold text-center mb-5 text-purple-700">
                Update Your Profile
            </h2>
            <p>{user?.displayName}</p>

            <form onSubmit={handleUpdate} className="space-y-4">
                <div>
                    <label className="block font-medium mb-1">Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        className="w-full border border-purple-300 rounded-lg p-2 focus:ring-2 focus:ring-purple-400 outline-none"
                        required
                    />
                </div>

                <div>
                    <label className="block font-medium mb-1">Photo URL</label>
                    <input
                        type="text" name="photo"
                        placeholder="Enter image URL"
                        className="w-full border border-purple-300 rounded-lg p-2 focus:ring-2 focus:ring-purple-400 outline-none"
                        required
                    />
                </div>

                <button
                    type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg transition" >Submit
                </button>

                {/* <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg transition"
                >
                    {loading ? "Updating..." : "Update Profile"}
                </button> */}
            </form>

            {/* Optional: live preview of photo
            {photoURL && (
                <div className="mt-6 text-center">
                    <img
                        src={photoURL}
                        alt="User Preview"
                        className="w-24 h-24 mx-auto rounded-full object-cover border-2 border-purple-300"
                    />
                    <p className="mt-2 font-medium text-gray-700">hi</p>
                </div>
            )} */}
        </div>
    );
};

export default Profile;
