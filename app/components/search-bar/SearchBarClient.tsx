"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import getPlayerUid, { SearchResults } from "@/app/lib/getPlayerUid";

type SearchBarClientProps = {
  initialQuery?: string;
};

const SearchBarClient: React.FC<SearchBarClientProps> = ({ initialQuery }) => {
  const [searchTerm, setSearchTerm] = useState(initialQuery || "");
  const [results, setResults] = useState<SearchResults[]>([]);
  const [hideDropdown, setHideDropdown] = useState(false);
  const router = useRouter();

  // Debounce logic
  useEffect(() => {
    const debounceTimeout = setTimeout(async () => {
      if (searchTerm.trim() === "") {
        setResults([]);
        return;
      }

      const searchResults = await getPlayerUid(searchTerm);

      // Ensure searchResults is always an array
      setResults(searchResults || []);
    }, 500); // Adjust delay time (500ms) to your preference

    // Cleanup the timeout if the user types again before the timeout is completed
    return () => clearTimeout(debounceTimeout);
  }, [searchTerm]);

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    setHideDropdown(false);
  };

  const handleSelect = (uid: string) => {
    router.push(`/nba/props?query=${uid}`);
    setHideDropdown(true);
  };

  return (
    <>
      <input
        name="query"
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
        className="search-input"
        placeholder="Search Players, Teams"
      />

      {!hideDropdown && results.length > 0 && (
        <ul className="dropdown">
          {results.map((player) => {
            console.log(player);
            if (player.headshot !== undefined) {
              return (
                <li
                  key={player.uid}
                  onClick={() => handleSelect(player.uid)}
                  className="dropdown-item"
                >
                  <div className="headshot-container">
                    <img src={player.headshot} alt="" className="headshot" />
                  </div>
                  <div className="text">
                    <p>{player.name}</p>
                    {player.subtitle === undefined ? (
                      <span>{player.description}</span>
                    ) : (
                      <span>{player.subtitle}</span>
                    )}
                    {/* <p>{player.description}</p> */}
                  </div>
                </li>
              );
            }
          })}
        </ul>
      )}
    </>
  );
};

export default SearchBarClient;
