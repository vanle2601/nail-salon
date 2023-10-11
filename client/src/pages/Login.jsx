import React from "react";
import NavBar from "../components/NavBar";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  const [formValues, setFormValues] = useState(initialValues);

  const handleChange = (e) => {
    setFormValues(e.target.value);
  };
  return (
    <>
      <NavBar />
      <div className="flex flex-direction-col justify-center justify-around items-center min-h-screen p-4 mx-5 grow">
        <div className="-mt-64">
          <h1 className="text-4xl text-center mb-4">Login</h1>
          <form className="max-w-md mx-auto">
            <div className="field">
              <label className="">Email</label>
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
              <label>Password</label>
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
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
