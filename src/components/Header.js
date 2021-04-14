import React from "react";
import logo from "../img/logo.svg";

export const Header = () => {
  return (
    <header className="App-header">
      <a href="https://tunein.com" target="_blank" rel="noopener noreferrer">
        <img src={logo} className="App-logo" alt="logo" />
      </a>
    </header>
  );
};
