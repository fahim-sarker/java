import React, { useState } from "react";
import axios from "axios";

const Profile = () => {
    const [userdata, setUserdata] = useState({
        name: '',
        email: '',
        password: '',
    });

    const profiledata = () => {
        const token = JSON.parse(localStorage.getItem("token"));
        const header = {
            headers: {
                authorization: `Bearer ${token}`
            }
        };
        axios.get("https://api.escuelajs.co/api/v1/auth/profile", header)
            .then((res) => {
                setUserdata({
                    name: res.data.name, 
                    email: res.data.email,
                    password: '', 
                });
            })
            .catch((err) => {
                console.log(err); 
            });
    };

    const logoutdata = () => {
        setUserdata()
        localStorage.removeItem("token")
    }

  return (
    <section className="py-10 bg-gray-200">
        <div className="container mx-auto">
            <h2 className="text-center text-black text-2xl font-bold">Profile</h2>
            <div className="w-[600px] mx-auto">
                <form>
                    <p>Name:</p>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={userdata.name} 
                        onChange={(e) => setUserdata({ ...userdata, name: e.target.value })} 
                        placeholder="Name"
                        className="py-4 px-2 border border-black rounded-lg w-full"
                    />
                    <p>Email:</p>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={userdata.email} 
                        onChange={(e) => setUserdata({ ...userdata, email: e.target.value })}
                        placeholder="Email"
                        className="py-4 px-2 border border-black rounded-lg w-full"
                    />
                    <p>Password:</p>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={userdata.password} 
                        onChange={(e) => setUserdata({ ...userdata, password: e.target.value })}
                        placeholder="Password"
                        className="py-4 px-2 border border-black rounded-lg w-full"
                    />
                   <div className="flex justify-between">
                   <button
                        type="button"
                        className="py-3 px-10 mt-5 bg-black text-white rounded-sm"
                        onClick={profiledata}
                    >
                        Fetch Profile
                    </button>
                    <button
                        type="button"
                        className="py-3 px-10 mt-5 bg-black text-white rounded-sm"
                        onClick={logoutdata}
                    >
                        logout
                    </button>
                   </div>
                </form>
            </div>
        </div>
    </section>
  );
};

export default Profile;
