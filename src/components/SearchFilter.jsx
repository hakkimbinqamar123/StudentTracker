import React from "react";

const SearchFilter = ({ search, setSearch, status, setStatus }) => {
  return (
    <div className="search-filter">
      <input
        type="text"
        placeholder="Search students..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="All">All Students</option>
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
        <option value="Completed">Completed</option>
      </select>
    </div>
  );
};

export default SearchFilter;
