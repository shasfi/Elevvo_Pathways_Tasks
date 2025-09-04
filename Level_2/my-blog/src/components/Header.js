import React from "react";

export default function Header({ search, setSearch }) {
  return (
    <header>
      <h1>My Personal Blog</h1>
      <input
        type="text"
        placeholder="Search posts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </header>
  );
}
