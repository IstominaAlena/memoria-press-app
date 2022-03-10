import React from "react";
import { withStyles } from "tss-react/mui";
import PropTypes from "prop-types";

import { defaultSearchStyles } from "./defaultSearchStyles";
import GetIcon from "../shared/GetIcon";

const CustomSearchRender = ({ classes, searchText, onSearch }) => {
  const handleTextChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <div className={classes.main}>
      <h2 className={classes.title}>Students</h2>
      <div className={classes.container}>
        <input
          aria-label={"Search"}
          className={classes.search}
          type="text"
          name="search"
          placeholder="Enter Student Name, Parent or ID here"
          value={searchText || ""}
          onChange={handleTextChange}
        />
        <span className={classes.searchIcon}>
          <GetIcon
            name="search"
            width={16}
            height={16}
            className="inside-svg"
          />
        </span>
      </div>
    </div>
  );
};

export default withStyles(CustomSearchRender, defaultSearchStyles, {
  name: "CustomSearchRender",
});

CustomSearchRender.propTypes = {
  classes: PropTypes.object.isRequired,
  searchText: PropTypes.string,
  onSearch: PropTypes.func.isRequired,
};
