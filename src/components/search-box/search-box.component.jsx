import React, { Component } from "react";

class SearchBox extends Component {
  render() {
    const { placeholder, onSearchChange } = this.props;
    return (
      <div>
        <input
          name="search-box"
          type="search"
          placeholder={placeholder}
          onChange={(e) => onSearchChange(e)}
        />
      </div>
    );
  }
}

export default SearchBox;
