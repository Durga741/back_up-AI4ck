import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    emailOrMobile: "",
    age: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false); // To toggle password visibility
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // To toggle confirmPassword visibility

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      const response = await axios.post(`${apiUrl}/register`, formData);
      alert(response.data.message || "Registration successful!");
      navigate("/login");
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || "An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex flex-wrap">
      <div className="flex w-full flex-col md:w-1/2">
        <div className="lg:w-[28rem] mx-auto my-auto flex flex-col justify-center pt-8 md:justify-start md:px-6 md:pt-0">
          <p className="text-left text-3xl font-bold">Create Your Account</p>
          <form className="flex flex-col pt-3 md:pt-8" onSubmit={handleSubmit}>
            {["name", "emailOrMobile", "age"].map((field, idx) => (
              <div className="mb-4 flex flex-col pt-4" key={idx}>
                <div className="relative flex overflow-hidden border-b-2 transition focus-within:border-b-gray-500">
                  <input
                    type={field === "age" ? "number" : "text"}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    className="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                    placeholder={field === "emailOrMobile" ? "Email/Mobile" : field.charAt(0).toUpperCase() + field.slice(1)}
                    required
                  />
                </div>
              </div>
            ))}

            {/* Password Field */}
            <div className="mb-4 flex flex-col pt-4">
              <div className="relative flex overflow-hidden border-b-2 transition focus-within:border-b-gray-500">
                <input
                  type={showPassword ? "text" : "password"} // Toggle between text and password
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                  placeholder="Password"
                  required
                />
                <span
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "🙈" : "👁️"} {/* Use eye icon for password toggle */}
                </span>
              </div>
            </div>

            {/* Confirm Password Field */}
            <div className="mb-4 flex flex-col pt-4">
              <div className="relative flex overflow-hidden border-b-2 transition focus-within:border-b-gray-500">
                <input
                  type={showConfirmPassword ? "text" : "password"} // Toggle between text and password
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                  placeholder="Confirm Password"
                  required
                />
                <span
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? "🙈" : "👁️"} {/* Use eye icon for password toggle */}
                </span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-gray-900 px-4 py-2 text-center text-base font-semibold text-white shadow-md ring-gray-500 ring-offset-2 transition focus:ring-2"
            >
              Register
            </button>
          </form>
          <p className="mt-4 text-center text-gray-600">
            Already have an account?{" "}
            <span
              className="cursor-pointer text-blue-500"
              onClick={() => navigate("/login")}
            >
              Login
            </span>
          </p>
        </div>
      </div>
      <div className="pointer-events-none relative hidden h-screen select-none bg-black md:block md:w-1/2">
        <div className="absolute bottom-0 z-10 px-8 text-white opacity-100">
          <p className="mb-32 text-3xl font-bold leading-10">
            Empowering women through AI—join us in shaping the future.
          </p>
        </div>
        <img
          className="-z-1 absolute top-0 h-full w-full object-cover opacity-90"
          src="https://images.pexels.com/photos/17771091/pexels-photo-17771091/free-photo-of-child-using-internet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Empowering Women"
        />
      </div>
    </div>
  );
};

export default Register;