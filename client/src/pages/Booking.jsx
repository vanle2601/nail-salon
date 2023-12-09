import React from "react";
import { InlineWidget } from "react-calendly";
import NavBar from "../components/NavBar";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <>
        <InlineWidget
          url="https://calendly.com/sixteennailbar"
          branding={{
            poweredBy: false,
          }}
          pageSettings={{
            primaryColor: "#fda4af",
          }}
        />
      </>
    </div>
  );
};

export default App;
