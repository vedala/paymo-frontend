import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import SignupButton from './SignupButton';

function NavBar() {
  const { isAuthenticated, isLoading, user } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <div className="navbar">
      <span className="title">Paymo</span>
      { !isAuthenticated && (
        <>
          <LoginButton />
          <SignupButton />
        </>
      )}
      { isAuthenticated && (
        <>
          <span className="logged-in-user">Logged in as: {user?.name}</span>
          <LogoutButton />
        </>
      )}
    </div>
  );
}

export default NavBar;
