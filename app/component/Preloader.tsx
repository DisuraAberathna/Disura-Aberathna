import React from "react";

const Preloader = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-blue-200 h-screen z-[60] overflow-hidden">
      <img src="/assets/images/loader2.svg" alt="loader" className="w-20 h-20 lg:w-28 lg:h-28" />
    </div>
  );
};

export default Preloader;
