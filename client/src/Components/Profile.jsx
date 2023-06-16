import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    // return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <img src={user.picture} className="rounded-full w-9  h-9"></img>
    )
  );
};

export default Profile;
