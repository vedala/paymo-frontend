import React from "react";
import NavBar from "./NavBar";
import { useAuth0 } from '@auth0/auth0-react';
import GoToAppButton from './GoToAppButton';

const PageNotFound = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div>
      <NavBar />
      <h1>Page Not Found</h1>
      { isAuthenticated && (
        <>
          <GoToAppButton />
        </>
      )}
    </div>
  );
};

export default PageNotFound;
