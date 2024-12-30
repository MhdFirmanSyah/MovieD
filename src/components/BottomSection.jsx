import React from "react";

function BottomSection({ children }) {
  return <div className="z-0 absolute top-80  bg-red-500">{children}</div>;
}

export default BottomSection;
