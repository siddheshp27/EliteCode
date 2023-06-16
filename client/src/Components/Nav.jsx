import React, { useState } from "react";
import LoginButton from "./LoginButton";
import Profile from "./Profile";

export default function Nav({ setIsHovering }) {
  return (
    <div className="bg-white w-screen h-[73.6px] p-3 flex">
      <LoginButton />
      <div
        className="absolute right-8 px-2 top-0 h-[73.6px] flex items-center"
        onMouseOver={() => setIsHovering(true)}
        onMouseOut={() => setIsHovering(false)}
      >
        <Profile />
      </div>
    </div>
  );
}
