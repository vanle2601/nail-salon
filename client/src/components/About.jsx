import React from "react";
import demo1 from "../assets/hero.jpg";

const About = () => {
  return (
    <>
      <div className="items-center justify-center mt-4 mb-6 px-48">
        <div className="grid grid-cols-2 gap-2 text-center mx-6 sm:flex flex-col">
          <div className="lg:header flex flex-col sm:text-left">
            <h1 className="text-3xl font-bold mb-2">Meet Katheryn</h1>
            <img
              className="w-80 h-auto mx-auto lg:self-end hidden lg:block"
              src={demo1}
              alt="Katheryn's Image"
            />
          </div>

          <div className="description items-center mx-8 mt-10 text-left">
            <p className="text-lg">
              Friendly and professional, Katheryn tailors her services to
              clients' preferences, skin types, and desired nail designs. Her
              warm demeanor ensures a satisfying experience.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
