import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import SignupButton from './SignupButton';

function NavBar() {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <div className="header">
      <span>Paymo</span>
      { !isAuthenticated && (
        <>
          <LoginButton />
          <SignupButton />
        </>
      )}
      { isAuthenticated && (
        <>
          <LogoutButton />
        </>
      )}
    </div>
  );
}

export default NavBar;
