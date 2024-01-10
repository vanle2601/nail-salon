import React from "react";
import demo1 from "../assets/hero.jpg";

const About = () => {
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="grid text-center">
          <div className="header">
            <h1 className="text-3xl font-bold mb-2">Katheryn, the Nail Tech</h1>
            <p className="text-lg">
              Friendly and professional, Katheryn tailors her services to
              clients' preferences, skin types, and desired nail designs. Her
              warm demeanor ensures a satisfying experience.
            </p>
          </div>
          <div className="image">
            {/* Add your image tag here */}
            <img className="w-64 h-64" src={demo1} alt="Katheryn's Image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
