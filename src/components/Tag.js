import React, { useState, useEffect } from "react";

export const Tag = ({ tag, handleTagClick, selectedTags }) => {
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    if (
      selectedTags.length &&
      selectedTags.filter(function (t) {
        return t === tag;
      }).length > 0
    ) {
      setIsSelected(true);
    } else {
      setIsSelected(false);
    }
  }, [selectedTags, tag]);

  return (
    <div
      className={"App-tag " + (isSelected && "App-tag-selected")}
      onClick={() => {
        let doSelection;
        if (!isSelected) doSelection = true;
        handleTagClick(tag, doSelection);
      }}
    >
      {tag}
    </div>
  );
};
