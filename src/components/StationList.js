import React from "react";

export const StationList = ({
  station,
  stations,
  handleSelectStation,
  sortBy,
}) => {
  return stations.length ? (
    <ul className="App-station-list">
      {stations
        .sort((a, b) => (a[sortBy] > b[sortBy] ? 1 : -1))
        .map((item) => (
          <li key={item.id} onClick={handleSelectStation.bind(this, item)}>
            <img
              src={item.imgUrl}
              className={
                "App-station-img " +
                (typeof station !== "undefined" &&
                  station.id === item.id &&
                  "App-station-img-selected")
              }
              alt={item.name + " (Station Logo)"}
            />
          </li>
        ))}
    </ul>
  ) : (
    <p>No stations match your selected genre filters.</p>
  );
};
