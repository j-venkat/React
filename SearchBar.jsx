import React from "react";

function SearchBar({ search, setSearch }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search by name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <br /><br />
    </div>
  );
}

export default SearchBar;
