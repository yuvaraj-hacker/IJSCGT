import React from "react";
import Home from "../Shared/Components/Home/Home";
import HelmetComponent from "./Helmet/HelmetProvider";

function Homes() {
  return (
    <>
      <HelmetComponent title="Home - International Journal of Sustainable Computing and Green Technologies" />
      <Home />
    </>
  );
}

export default Homes;
