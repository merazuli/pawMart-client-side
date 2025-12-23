import React, { useContext, useState } from "react";
import { updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
import { auth, AuthContext } from "../provider/AuthProvider";

const Profile = () => {
    const { setUser, user } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);

    const handleUpdate = async (e) => {
        e.preventDefault();
        setLoading(true);
        const name = e.target.name.value;
        const photo = e.target.photo.value;

        try {
            await updateProfile(auth.currentUser, {
                displayName: name,
                photoURL: photo,
            });

            // Updating local state to reflect changes immediately
            setUser({ ...auth.currentUser, displayName: name, photoURL: photo });

            toast.success("🐾 Profile updated successfully!");
        } catch (error) {
            console.error(error);
            toast.error("❌ Profile update failed!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center  justify-center bg-gradient-to-br from-purple-50 to-pink-50 p-6">
            <div className="max-w-2xl w-full bg-white/80 backdrop-blur-md border border-white rounded-3xl shadow-2xl overflow-hidden">

                {/* Header/Banner Section */}
                <div className="h-32 bg-gradient-to-r from-purple-500 to-pink-500 relative">
                    <div className="absolute -bottom-12 left-1/2 -translate-x-1/2">
                        <div className="relative">
                            <img
                                src={user?.photoURL || "https://via.placeholder.com/150"}
                                alt="Profile"
                                className="w-24 h-24 rounded-full border-4 border-white object-cover shadow-lg"
                            />
                            <div className="absolute bottom-1 right-1 bg-green-500 w-5 h-5 border-2 border-white rounded-full"></div>
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="pt-16 pb-8 px-8">
                    <div className="text-center mb-6">
                        <h2 className="text-2xl font-bold text-gray-800">{user?.displayName || "Pawmart User"}</h2>
                        <p className="text-sm text-gray-500">{user?.email}</p>
                    </div>

                    <div className="bg-purple-50 rounded-2xl p-4 mb-6 flex justify-around text-center">
                        <div>
                            <p className="text-xs text-purple-400 uppercase font-bold tracking-wider">Status</p>
                            <p className="text-sm font-semibold text-purple-700">Active Member</p>
                        </div>
                        <div className="border-l border-purple-200"></div>
                        <div>
                            <p className="text-xs text-purple-400 uppercase font-bold tracking-wider">Role</p>
                            <p className="text-sm font-semibold text-purple-700">Pet Lover</p>
                        </div>
                    </div>

                    <form onSubmit={handleUpdate} className="space-y-4">
                        <div className="group">
                            <label className="block text-xs font-bold text-gray-400 uppercase mb-1 ml-1">Full Name</label>
                            <input
                                type="text"
                                name="name"
                                defaultValue={user?.displayName}
                                placeholder="Enter your name"
                                className="w-full bg-gray-50 border border-transparent group-focus-within:border-purple-400 group-focus-within:bg-white rounded-xl p-3 transition-all outline-none"
                                required
                            />
                        </div>

                        <div className="group">
                            <label className="block text-xs font-bold text-gray-400 uppercase mb-1 ml-1">Photo URL</label>
                            <input
                                type="text"
                                name="photo"
                                defaultValue={user?.photoURL}
                                placeholder="Paste image link"
                                className="w-full bg-gray-50 border border-transparent group-focus-within:border-purple-400 group-focus-within:bg-white rounded-xl p-3 transition-all outline-none"
                                required
                            />
                        </div>

                        <button
                            disabled={loading}
                            type="submit"
                            className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-bold py-3 rounded-xl shadow-lg shadow-purple-200 transition-all transform active:scale-95 disabled:opacity-50"
                        >
                            {loading ? "Updating..." : "Save Changes"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Profile;