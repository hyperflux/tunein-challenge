import React, { useState } from "react";

import "./css/App.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Header } from "./components/Header";
import { StationSelector } from "./components/StationSelector";
import { StationPlayer } from "./components/StationPlayer";
import { Spacer } from "./components/Spacer";

function App() {
  const [station, setStation] = useState();

  return (
    <div className="App">
      <Header />
      <Spacer h={40} />
      <StationSelector station={station} setStation={setStation} />
      <Spacer h={40} />
      <StationPlayer station={station} />
      <Spacer h={100} />
    </div>
  );
}

export default App;
