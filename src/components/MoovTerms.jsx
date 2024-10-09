import React from 'react';

function MoovTerms({ moovAccessToken }) {

  return(
    <moov-terms-of-service token={moovAccessToken} textColor="#000000" backgroundColor="#ffffff" fontSize="16px"></moov-terms-of-service>
  );
}

export default MoovTerms;
