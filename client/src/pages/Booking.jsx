import React from "react";
import { InlineWidget } from "react-calendly";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const App = () => {
  return (
    <>
      <div>
        <div className="h-screen flex flex-col overflow-hidden">
          <NavBar />

          <InlineWidget
            url="https://calendly.com/sixteennailbar"
            branding={{
              poweredBy: false,
            }}
            pageSettings={{
              primaryColor: "#fda4af",
            }}
            styles={{
              height: "80%",
              width: "auto", // Ensure the Calendly widget takes up the full height
            }}
          />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
