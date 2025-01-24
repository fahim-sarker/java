import axios from "axios";
import React, { useState } from "react";

const Login = () => {
  const [name, setName] = useState('');
  const [mail, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handlesubmit = (e) => {
    e.preventDefault();
    const payload = {
      name: name,
      email: mail,
      password: password,
    };
    axios.post("https://api.escuelajs.co/api/v1/auth/login", payload)
      .then((res) => {
        localStorage.setItem("token", JSON.stringify(res.data.access_token));
        alert('Login successful');
        console.log("Login successful", res);
        setName('');
        setEmail('');
        setPassword('');
      })
      .catch((err) => {
        alert("Login failed");
        console.log("Login failed", err);
      });
  };

  return (
    <>
      <section className="py-10 bg-gray-200">
        <div className="container mx-auto">
          <h2 className="text-center text-black text-2xl font-bold">Login</h2>
          <div className="w-[600px] mx-auto">
            <form onSubmit={handlesubmit}>
              <p>Name:</p>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                className="py-4 px-2 border border-black rounded-lg w-full"
              />
              <p>Email:</p>
              <input
                type="email"
                value={mail}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="py-4 px-2 border border-black rounded-lg w-full"
              />
              <p>Password:</p>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="py-4 px-2 border border-black rounded-lg w-full"
              />
              <button
                type="submit"
                className="py-3 px-10 mt-5 bg-black text-white rounded-sm"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
