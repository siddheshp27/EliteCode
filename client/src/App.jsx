import React from "react";
import Compiler from "./Components/Compiler";
import Nav from "./Components/Nav";

const App = () => {
  return (
    <div className="main h-screen w-full">
      <Nav />
      <Compiler />
    </div>
  );
};

export default App;
