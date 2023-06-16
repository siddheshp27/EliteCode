import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = (e) => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <div>
      {!isAuthenticated && (
        <button
          className="absolute right-8 border-2 bg-neutral-900 text-white border-black px-6 py-3 rounded-lg font-lato font-semibold "
          onClick={() => loginWithRedirect()}
        >
          Log In
        </button>
      )}
    </div>
  );
};

export default LoginButton;
