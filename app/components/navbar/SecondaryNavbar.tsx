"use client";
import React from "react";
import { useRouter, usePathname } from "next/navigation";
import "./navbar.scss";

type SecondaryNavbarProps = {};

const SecondaryNavbar: React.FC<SecondaryNavbarProps> = () => {
  const router = useRouter();
  const pathname = usePathname();
  const currentLeague = pathname?.split("/")[1];
  const currentLink = pathname?.split("/")[2];

  const getActiveLinkClassname = (link: string) => {
    return currentLink === link ? "active-link" : "inactive-link";
  };

  const handleLinkClick = (link: string) => {
    router.push(`/${currentLeague}/${link}`)
  }

  return (
    <div className="secondary-navbar-container">
      <div className="secondary-navbar">
        <div className="sport">
          <p>NBA</p>
        </div>
        <div className="sport-links">
          <ul>
            <li>NBA Home</li>
            {/* <li>Odds</li> */}
            <li className={getActiveLinkClassname("props")} onClick={() => handleLinkClick("props")}>Props</li>
            <li className={getActiveLinkClassname("matchups")} onClick={() => handleLinkClick("matchups")}>Matchups</li>
            {/* <li>Tools</li>
            <li>Research</li>
            <li>Teams</li>
            <li>Leaderboards</li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SecondaryNavbar;
