import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

// function MoovTerms({ moovAccessToken }) {
function MoovTerms() {

  const PAYMO_API_URL = process.env.REACT_APP_PAYMO_API_URL;
  const loc = useLocation();
  const moovAccessToken = loc.state.moovAccessToken;

  const navigate = useNavigate();

  const handleClick = async () => {
    console.log("Moov accept clicked, loc=", loc);

    const generateTosTokenResponse = await axios.post(`${PAYMO_API_URL}/api/generate-tos-token`, {
        moovAccessToken
      },
      {
        "Content-Type": "application/json",
        "Accept": "application/json",
      });

console.log("generateTosTokenResponse=", generateTosTokenResponse);
    const tosToken = generateTosTokenResponse.data.tosToken;
console.log("tosToken=", tosToken);
    navigate("/dashboard");
  }

  return(
    <>
      <p>Accept Moov Terms of Service</p>
      <button onClick={handleClick}>
        Accept
      </button>
    </>
  );
}

export default MoovTerms;
