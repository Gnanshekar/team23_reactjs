import React from "react";
import Countdown from "./Countdown";

const Body = () => {
  return (
    <div className="mainbody">
      <div className="content">
        <h1>body info</h1>
        <div className="countdown">
          <Countdown initialSeconds={10} />
        </div>
      </div>
    </div>
  );
};

export default Body;
