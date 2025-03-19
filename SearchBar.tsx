import React, { useState } from "react";
// import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="flex items-center border rounded-md p-2 bg-white shadow-sm">
      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-grow outline-none p-1"
      />
      {/* <FaSearch className="text-gray-500" /> */}
      <span className="text-gray-500">🔍</span>
    </div>
  );
};

export default SearchBar;