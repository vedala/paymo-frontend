import React from 'react';
import NavBar from './NavBar';
import { useAuth0 } from '@auth0/auth0-react';
import GoToAppButton from './GoToAppButton';

function Welcome() {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="welcome">
      <NavBar />
      <h1>Welcome to Paymo!</h1>
      { isAuthenticated && (
        <>
          <GoToAppButton />
        </>
      )}
    </div>
  );
}

export default Welcome;
