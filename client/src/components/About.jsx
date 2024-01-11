import React from "react";
import demo1 from "../assets/hero.jpg";

const About = () => {
  return (
    <>
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
          <div className="max-w-md text-center md:text-left md:mr-6">
            <h2 className="text-3xl font-bold mb-4">Meet Katheryn</h2>
            <p className="text-gray-700 mb-6">
              Friendly and professional, Katheryn tailors her services to
              clients' preferences, skin types, and desired nail designs. Her
              warm demeanor ensures a satisfying experience.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <img
              src={demo1}
              alt="Katheryn's Photo"
              className="rounded-full w-32 h-32 object-cover mx-auto md:mx-0"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
