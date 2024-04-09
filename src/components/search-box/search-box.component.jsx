import React, { Component } from "react";

class SearchBox extends Component {
  render() {
    const { placeholder, onSearchChange, className } = this.props;
    return (
      <div>
        <input
          className={className}
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
