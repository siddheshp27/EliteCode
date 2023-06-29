import React from "react";
import LogoutButton from "./LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";

function ProfileMenu({ setIsHovering }) {
  const { user, isAuthenticated } = useAuth0();
  console.log(user);

  return (
    isAuthenticated && (
      <div
        className="absolute right-8 py-1 bg-[#181a1b] z-10"
        onMouseOver={() => setIsHovering(true)}
        onMouseOut={() => setIsHovering(false)}
      >
        <div className=" p-3 flex items-center max-w-fit border-2 border-gray-300 border-x-0 bg-white">
          <img
            src={user.picture}
            className="rounded-full w-14 h-14 ml-0 mr-3"
          ></img>

          <ul className="list-none">
            <li className="font-bold text-base py-1">{user.name}</li>
            <li className=" text-xs">{user.email}</li>
          </ul>
        </div>
        <div className="bg-white">
          <LogoutButton />
        </div>
      </div>
    )
  );
}

export default ProfileMenu;
