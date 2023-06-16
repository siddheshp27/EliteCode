import React from "react";
import { useState } from "react";
import Compiler from "./Components/Compiler";
import NavMenu from "./Components/NavMenu";

const App = () => {
  const [curr, setCurr] = useState("Home");
  // const [signInState, setSignInState] ;
  function CurrPage() {
    if (curr == "Home") {
      return <NavMenu />;
    }
  }

  return (
    <div className="main h-screen w-full">
      <CurrPage />
      {false}
    </div>
  );
};

export default App;
