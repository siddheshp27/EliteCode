import React from "react";
import { useState, useEffect } from "react";
import Compiler from "./Components/Compiler";
import NavMenu from "./Components/NavMenu";
import { useAuth0 } from "@auth0/auth0-react";

const App = () => {
  const [curr, setCurr] = useState("Home");

  const { isAuthenticated } = useAuth0();

  useEffect(() => {
    console.log(isAuthenticated);
    if (isAuthenticated) {
      setCurr("Compiler");
    } else {
      setCurr("Home");
    }
  }, [isAuthenticated]);

  // const [signInState, setSignInState] ;
  function CurrPage() {
    if (curr == "Home") {
      return <NavMenu />;
    } else if (curr == "Compiler") {
      return (
        <div>
          <NavMenu />
          <Compiler />
        </div>
      );
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
