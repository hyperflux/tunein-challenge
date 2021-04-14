import React, { useState, useEffect } from "react";
import ReactAudioPlayer from "react-audio-player";
import { FadeIn } from "./FadeIn";

export const StationPlayer = ({ station }) => {
  const [isError, setIsError] = useState(false);

  const handleOnError = (e, error) => {
    setIsError(true);
  };

  useEffect(() => {
    setIsError(false);
  }, [station]);

  return (
    <FadeIn show={station} className={"App-player"}>
      {!!station && (
        <>
          <h3 className="App-h">{station.name}</h3>
          <ReactAudioPlayer
            src={station.streamUrl}
            autoPlay
            controls
            onError={handleOnError}
          />
          {!!isError && (
            <p className="App-text-sm App-text-error">
              Sorry, there was an error loading this station.
            </p>
          )}
          <p>{station.description}</p>
        </>
      )}
    </FadeIn>
  );
};
