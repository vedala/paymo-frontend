import React from 'react';
import { useLocation } from 'react-router-dom';
// import { loadMoov } from "@moovio/moov-js";
import axios from 'axios';

// function MoovTerms({ moovAccessToken }) {
function MoovTerms() {

  const PAYMO_API_URL = process.env.REACT_APP_PAYMO_API_URL;
  const loc = useLocation();
  const moovAccessToken = loc.state.moovAccessToken;

  // const moovTOSRef = useRef();
    // await loadMoov(moovAccessToken);

  // moovTOSRef.textColor = "#000000";
  // moovTOSRef.fontSize = "18px";
  const handleClick = async () => {
    console.log("Moov accept clicked, loc=", loc);

//     const { tosToken } = await axios.get("https://api.moov.io/tos-token", {
//       headers: {
//         Authorization: `Bearer ${moovAccessToken}`
//       }
//     })
// console.log("tosToken=", tosToken);
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
  }

  return(
    // <moov-terms-of-service
    //   token={moovAccessToken}
    //   style={{textColor:"#000000", backgroundColor:"#ffffff", fontSize:"16px"}}
    // >
    // </moov-terms-of-service>
    <button onClick={handleClick}>
      Do you accept Moov terms of service
    </button>
  );
}

export default MoovTerms;
