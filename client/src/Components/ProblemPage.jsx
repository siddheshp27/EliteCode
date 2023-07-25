import React, { useContext, useState } from "react";
import Split from "react-split";

import Compiler from "./ProblemPage/Compiler";
import Console from "./ProblemPage/Console";
import { ClientContext } from "../Context";

export default function ProblemPage() {
  const [consoleState, setConsoleState] = useState(true);
  const { handleSubmit } = useContext(ClientContext);
  const toggleConsole = (e) => {
    e.preventDefault();
    setConsoleState((prev) => !prev);
  };

  function Test() {
    return (
      <Split
        direction="vertical"
        sizes={consoleState ? [75, 25] : [100]}
        gutterSize={5}
        className="h-5/6"
      >
        <Compiler />
        {consoleState && <Console />}
      </Split>
    );
  }

  return (
    <Split
      direction="horizontal"
      gutterSize={8}
      className="h-[100vh] pr-1 flex"
    >
      <div className="bg-red-500  "></div>
      <div className="h-full">
        <Test />
        <div className="bg-[#252627] mt-2 h-10 rounded-md flex justify-between  px-3  ">
          <button
            className="bg-[#252729] text-sm text-white "
            onClick={toggleConsole}
          >
            Console
          </button>
          <button id="hero-cta" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </Split>
  );
}
