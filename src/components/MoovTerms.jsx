import React from 'react';
import { useLocation } from 'react-router-dom';

// function MoovTerms({ moovAccessToken }) {
function MoovTerms() {

  const loc = useLocation();

  const handleClick = () => {
    console.log("Moov accept clicked, loc=", loc);
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
