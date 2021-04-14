import React from "react";

export const FadeIn = ({ show = false, className, children }) => {
  return (
    <div
      className={
        className + " App-trans-opac " + (show ? "App-opac-1" : "App-opac-0")
      }
    >
      {children}
    </div>
  );
};
