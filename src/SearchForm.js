import React from "react";

const SearchForm = ({search, setSearch}) => {
  return (
    <form action="" className="searchForm" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="search">Search Posts</label>
      <input
        type="text"
        id={search}
        placeholder="Search Posts"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
};

export default SearchForm;
