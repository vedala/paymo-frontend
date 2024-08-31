import React from "react";
import { Link } from "react-router-dom";

const GoToAppButton = () => {

  return (
    <Link to="/dashboard">
      <button>
        Go To App
      </button>
    </Link>
  );
};

export default GoToAppButton;
