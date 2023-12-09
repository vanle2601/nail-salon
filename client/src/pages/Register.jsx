import React from "react";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const notify = () => toast("Register Succesfully. Login now!");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  async function registerUser(e) {
    e.preventDefault();
    await axios.post("/register", {
      username: formValues.username,
      email: formValues.email,
      password: formValues.password,
    });

    notify();
  }

  return (
    <>
      <NavBar />
      <div className="flex flex-direction-col justify-center justify-around items-center min-h-screen p-4 mx-5 grow">
        <div className="-mt-64">
          <h1 className="text-4xl text-center mb-4">Register</h1>
          <form onSubmit={registerUser} className="max-w-md mx-auto">
            <div className="field">
              <label className="font-bold" htmlFor="username">
                Name
              </label>
              <input
                id="username"
                className="w-full border my-2 py-2 px-3 rounded-lg"
                placeholder="John Doe"
                type="name"
                name="username"
                value={formValues.username}
                onChange={handleChange}
              />
            </div>
            <div className="field">
              <label className="font-bold" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                className="w-full border my-2 py-2 px-3 rounded-lg"
                placeholder="your@email.com"
                type="email"
                name="email"
                value={formValues.email}
                onChange={handleChange}
              />
            </div>

            <div className="field">
              <label className="font-bold">Password</label>
              <input
                className="w-full border my-2 py-2 px-3 rounded-lg"
                placeholder="Password"
                type="password"
                name="password"
                value={formValues.password}
                onChange={handleChange}
              />
            </div>
            <button className="w-full bg-button-pink mt-2 p-3 rounded-xl">
              Register
            </button>
            <div className="mt-2 text-center text-gray-500">
              Already have an account?
              <Link className="text-button-pink px-1" to="/login">
                Login
              </Link>
              <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
