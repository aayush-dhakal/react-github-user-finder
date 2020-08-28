import React from "react";
import spinner from "./spinner.gif";

const Loading = () => {
  return (
    <>
      <img src={spinner} alt="Loading..." style={loading} />
    </>
  );
};

const loading = {
  display:'block', // to take up whole width so that margin property can be applied
  margin:'0 auto',
  width:'200px' // makes it smaller
}

export default Loading;
