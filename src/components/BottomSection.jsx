import React from "react";

function BottomSection({ children }) {
  return (
    <div className="bs z-0 pt-14 relative top-[26.4rem] sm:top-[26.7rem] md:top-[28rem] lg:top-[37.2rem] xl:top-[40.2rem] 2xl:top-[47.7rem] color-base h-max w-full ">
      {children}
    </div>
  );
}

export default BottomSection;
