import React, { useRef } from "react";
import NavBar from "../components/NavBar";
import { useState } from "react";

import emailjs, { send } from "@emailjs/browser";

const Login = () => {
  const initialValues = {
    username: "",
    email: "",
    phone: "",
    password: "",
    message: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_owpluqq",
        "template_zmjrfcp",
        form.current,
        "XyvYXOAMA1VxqkYQ9"
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormValues(initialValues); // Clear the form
          setSubmitted(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <NavBar />

      <div className="bg-gray-100 flex flex-direction-col justify-center mt-24 p-4 grow">
        <div className="justify-center items-center container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-semibold text-gray-800">Contact Me</h2>
            <p className="text-gray-600 mt-4">
              Let's get in touch now to make an appointment.
            </p>
          </div>

          <div className="mt-1">
            <div className="bg-white max-w-md p-3 rounded-lg shadow-md mx-auto block">
              <h3 className="text-xl font-semibold text-gray-800">
                Katherine Bui
              </h3>
              <p className="mt-2">0433020223</p>
              <p className="mt-2">sixteennailbar@gmail.com</p>
              <p className="mt-2">555 Swanston St, Carlton VIC 3053</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-direction-col justify-center justify-around items-center min-h-screen pt-4 mx-5 grow">
        <div className="-mt-16 sm:-mt-80">
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">
            Leave a message
          </h2>
          <form className="max-w-md mx-auto" ref={form} onSubmit={sendEmail}>
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
              <label className="font-bold">Phone</label>
              <input
                className="w-full border my-2 py-2 px-3 rounded-lg"
                placeholder="0434222222"
                type="number"
                name="phone"
                value={formValues.phone}
                onChange={handleChange}
              />
            </div>

            <div className="field">
              <label className="font-bold">Message</label>
              <input
                className="w-full border my-2 py-12 px-2 rounded-lg"
                type="text"
                name="message"
                value={formValues.message}
                onChange={handleChange}
              />
            </div>
            <button className="w-full bg-button-pink mt-2 p-3 rounded-xl">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
