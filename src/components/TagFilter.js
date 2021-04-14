import React from "react";
import { Tag } from "./Tag";

export const TagFilter = ({
  tags,
  selectedTags,
  handleTagClick,
  handleResetClick,
}) => {
  return (
    <>
      <div className="App-tag-list">
        {tags.map((tag) => {
          return (
            <Tag
              key={tag}
              tag={tag}
              handleTagClick={handleTagClick}
              selectedTags={selectedTags}
            />
          );
        })}
      </div>
      {!!selectedTags.length && (
        <button className="App-btn-clear" onClick={handleResetClick}>
          Reset Selected Genres
        </button>
      )}
    </>
  );
};
