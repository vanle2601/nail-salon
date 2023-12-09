import React from "react";
import NavBar from "../components/NavBar";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  const [formValues, setFormValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  async function handleLoginSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post("/login", {
        email: formValues.email,
        password: formValues.password,
      });

      if (response.data.status === "pass ok") {
        toast.success("Login Successful");
      } else if (response.data === "not found") {
        toast.error(response.data.message || "Login Failed");
      } else {
        toast.error(response.data.message || "Login Failed");
      }
    } catch (error) {
      toast.error("Login Failed");
      console.log(error);
    }
  }

  return (
    <>
      <NavBar />
      <div className="flex flex-direction-col justify-center justify-around items-center min-h-screen p-4 mx-5 grow">
        <div className="-mt-64">
          <h1 className="text-4xl text-center mb-4">Login</h1>
          <form onSubmit={handleLoginSubmit} className="max-w-md mx-auto">
            <div className="field">
              <label className="font-bold">Email</label>
              <input
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
              Login
            </button>
            <div className="mt-2">
              Don't have an account yet?
              <Link className="text-button-pink px-1" to="/register">
                Register Now
              </Link>
              <ToastContainer
                position="bottom-center"
                autoClose={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                theme="dark"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
