"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import SearchFormReset from "./SearchFormReset";
import SearchBarClient from "./SearchBarClient";
import getPlayerUid from "@/app/lib/getPlayerUid";
import './searchBar.scss';

type SearchBarProps = {
  query: string;
};

const SearchBar: React.FC<SearchBarProps> = ({ query }) => {
  const router = useRouter();

  // Function to handle the form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the default form submit behavior

    const searchTerm = query; // You can pass the value directly from the input
    const playerUid = await getPlayerUid(searchTerm);

    if (playerUid) {
      router.push(`/nba/props?query=${playerUid}`); // Redirect with player UID
    } else {
      router.push("/nba/props"); // If no player found, redirect to homepage
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <SearchBarClient initialQuery={query} />
      <div className="button-container">
        {query && <SearchFormReset />}
        <button type="submit" className="search-btn">Search</button>
      </div>
    </form>
  );
};

export default SearchBar;