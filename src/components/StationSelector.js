import React, { useState, useEffect } from "react";
import Loader from "react-loader-spinner";
import { FadeIn } from "./FadeIn";
import { FadeOut } from "./FadeOut";

import { TagFilter } from "./TagFilter";
import { StationList } from "./StationList";
import { Spacer } from "./Spacer";
import ErrorDisplay from "./ErrorDisplay";
import useFetch from "../hooks/useFetch";
import { SortControl } from "./SortControl";

export const StationSelector = ({ station, setStation }) => {
  const [showStations, setShowStations] = useState(false);
  const [filteredStations, setFilteredStations] = useState([]);

  const [tags, setTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);

  const sortOptions = ["name", "popularity", "reliability"];
  const [sortBy, setSortBy] = useState(sortOptions[0]);

  const { data: stations, loaded, error } = useFetch(
    "https://s3-us-west-1.amazonaws.com/cdn-web.tunein.com/stations.json"
  );

  const handleSelectStation = (selectedStation) => {
    setStation(selectedStation);
  };

  const handleTagClick = (tag, doSelection) => {
    if (doSelection) {
      setSelectedTags([...new Set([...selectedTags, tag])]);
    } else {
      const i = selectedTags.indexOf(tag);
      if (i > -1) {
        var tempTags = [...selectedTags];
        tempTags.splice(i, 1);
        setSelectedTags([...tempTags]);
      }
    }
  };

  const handleResetClick = () => {
    setSelectedTags([]);
  };

  const parseTags = (stations) => {
    let tempTags = [];
    stations.forEach((s) => {
      tempTags = [...tempTags, ...s.tags];
    });
    let uniqueTags = [...new Set(tempTags.sort((a, b) => (a > b ? 1 : -1)))];
    return uniqueTags;
  };

  useEffect(() => {
    if (stations) {
      setTags(parseTags(stations));
      setFilteredStations([...stations]);
      // Short timeout required for opacity transition
      setTimeout(() => {
        setShowStations(true);
      }, 200);
    }
  }, [stations]);

  useEffect(() => {
    // filter visibleStations based on selected tags

    if (!selectedTags.length) {
      setFilteredStations([...stations]);
    } else {
      let tempFilteredStations = [];
      stations.forEach((tempStation) => {
        let stationHasMatchingTag = true;
        for (let i = 0; i < selectedTags.length; i++) {
          if (
            tempStation.tags.filter(function (t) {
              return t === selectedTags[i];
            }).length === 0
          ) {
            stationHasMatchingTag = false;
          }
        }
        if (stationHasMatchingTag) {
          tempFilteredStations.push(tempStation);
        }
        setFilteredStations([...tempFilteredStations]);
      });
    }
  }, [selectedTags, stations]);

  return (
    <section>
      {!loaded && (
        <FadeOut hide={showStations}>
          <Loader type="Circles" color="#00BFFF" height={50} width={500} />
          <p className="App-text-sm">Loading Stations</p>
        </FadeOut>
      )}
      {!!loaded && error && <ErrorDisplay errorMsg={error} />}
      {!!loaded && !error && stations && (
        <FadeIn show={showStations}>
          <TagFilter
            selectedTags={selectedTags}
            tags={tags}
            handleTagClick={handleTagClick}
            handleResetClick={handleResetClick}
          />
          <Spacer h={40} />
          <SortControl
            sortOptions={sortOptions}
            sortBy={sortBy}
            setSortBy={setSortBy}
          />
          <Spacer h={20} />
          <StationList
            station={station}
            stations={filteredStations}
            handleSelectStation={handleSelectStation}
            sortBy={sortBy}
          />
        </FadeIn>
      )}
    </section>
  );
};
