import React from "react";
import "./navbar.scss";

type SecondaryNavbarProps = {};

const SecondaryNavbar: React.FC<SecondaryNavbarProps> = () => {
  return (
    <div className="secondary-navbar-container">
      <div className="secondary-navbar">
        <div className="sport">
          <p>NBA</p>
        </div>
        <div className="sport-links">
          <ul>
            <li>NBA Home</li>
            <li>Odds</li>
            <li>Picks</li>
            <li>Matchups</li>
            <li>Tools</li>
            <li>Research</li>
            <li>Articles</li>
            <li>Teams</li>
            <li>Leaderboards</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SecondaryNavbar;
