import React from "react";

export const FadeOut = ({ hide = true, children }) => {
  return (
    <div className={"App-trans-opac " + (hide ? "App-opac-0" : "App-opac-1")}>
      {children}
    </div>
  );
};
