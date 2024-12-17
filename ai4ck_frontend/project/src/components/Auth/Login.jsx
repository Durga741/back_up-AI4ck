import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [formData, setFormData] = useState({
    emailOrMobile: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const apiUrl = import.meta.env.VITE_API_URL; // Access the API URL from the environment variable
      const response = await axios.get(`${apiUrl}/login`, {
        params: formData,
      });

      if (response.data.success) {
        alert("Login successful");
        // Redirect to dashboard after successful login
        navigate("/dashboard"); // Change to the route where the sidebar is rendered
      } else {
        alert("Invalid credentials or user not found");
      }
    } catch (err) {
      alert("An error occurred during login");
      console.error(err);
    }
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center text-gray-600 bg-gray-50">
      <div className="relative">
        <div className="hidden sm:block h-56 w-56 text-purple-300 absolute a-z-10 -left-20 -top-20">
          <svg id="patternId" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="a" patternUnits="userSpaceOnUse" width="40" height="40" patternTransform="scale(0.6) rotate(0)">
                <rect x="0" y="0" width="100%" height="100%" fill="none" />
                <path d="M11 6a5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5 5 5 0 015 5" stroke-width="1" stroke="none" fill="plum" />
              </pattern>
            </defs>
            <rect width="800%" height="800%" transform="translate(0,0)" fill="url(#a)" />
          </svg>
        </div>
        <div className="hidden sm:block h-28 w-28 text-purple-300 absolute a-z-10 -right-20 -bottom-20">
          <svg id="patternId" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="b" patternUnits="userSpaceOnUse" width="40" height="40" patternTransform="scale(0.5) rotate(0)">
                <rect x="0" y="0" width="100%" height="100%" fill="none" />
                <path d="M11 6a5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5 5 5 0 015 5" stroke-width="1" stroke="none" fill="plum" />
              </pattern>
            </defs>
            <rect width="800%" height="800%" transform="translate(0,0)" fill="url(#b)" />
          </svg>
        </div>
        <div className="relative flex flex-col sm:w-[30rem] rounded-lg border-gray-400 bg-white shadow-lg px-4">
          <div className="flex-auto p-6">
            <div className="mb-10 flex items-center justify-center">
              <Link to="/" className="flex cursor-pointer items-center gap-2 text-violet-500 no-underline hover:text-violet-500">
                <span className="text-3xl font-black tracking-tight">Ai4CoolKids</span>
              </Link>
            </div>
            <h4 className="mb-2 font-medium text-gray-700 xl:text-xl">Welcome to Ai4CoolKids!</h4>
            <p className="mb-6 text-gray-500">Please sign in to access your account</p>

            <form onSubmit={handleSubmit} className="mb-4">
              <div className="mb-4">
                <label htmlFor="emailOrMobile" className="mb-2 inline-block text-xs font-medium uppercase text-gray-700">
                  Email or Mobile Number
                </label>
                <input
                  type="text"
                  className="block w-full rounded-md border border-gray-400 bg-white py-2 px-3 text-sm outline-none focus:border-purple-500 focus:shadow"
                  id="emailOrMobile"
                  name="emailOrMobile"
                  value={formData.emailOrMobile}
                  onChange={handleChange}
                  placeholder="Enter email or mobile number"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="mb-2 inline-block text-xs font-medium uppercase text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="block w-full rounded-md border border-gray-400 bg-white py-2 px-3 text-sm outline-none focus:border-purple-500 focus:shadow"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="············"
                  required
                />
              </div>
              <button type="submit" className="w-full rounded-md border border-purple-500 bg-purple-500 py-2 text-sm text-white shadow hover:border-purple-600 hover:bg-purple-600 focus:shadow-none">
                Sign in
              </button>
            </form>

            <p className="text-center">
              Start Your Journey with Ai4CoolKids. Register here to create your account!{" "}
              <span className="cursor-pointer text-purple-500" onClick={() => navigate("/register")}>
                Create an account
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
