import React, { Component } from "react";
import { render } from "@testing-library/react";

class SearchBar extends Component {
  render() {
    return (
      <div className="searchbar">
        <form className="searchbarform">
          <label htmlFor="search">Search:</label>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Enter Book Title"
          /><div className="searchbar__buttons">
            <button type="submit"
            onClick={e => this.props.showForm(true)}>
  Search</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
