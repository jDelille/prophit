import React from "react";
import Link from "next/link";
import "./footer.scss";

type FooterProps = {};
const Footer: React.FC<FooterProps> = () => {
  return (
    <div className="footer">
      <div className="logo">
        <Link href="/">
          Prop<span>hit</span>
        </Link>
      </div>
      <div className="links">
        <div className="nba">
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
        <div className="mlb">
          <ul>
            <li>MLB Home</li>
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
        <div className="nfl">
          <ul>
            <li>NFL Home</li>
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
        <div className="info">
          <ul>
            <li>Get Involved</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
            <li>Third Party Licenses</li>
            <li>Do Not Sell</li>
            <li>Accessibility</li>
            <li>Disclosures</li>
          </ul>
        </div>
      </div>
      <div className="disclaimers">
        <p>© Copyright 2025 Prophit.com®</p>
        <p>Do Not Sell My Personal Information</p>
        <p>
          The content of this website is intended to be used for entertainment
          purposes only. Please be aware of and respect the laws regarding
          sports betting for your jurisdiction.
        </p>
        <p>
          We are not affiliated, associated, authorized, endorsed by, or in any
          way officially connected with the NFL, MLB, NBA, NHL, PGA, UFC, WNBA,
          or any other league or team. Any names, logos, or images are
          trademarks™ or registered® trademarks of their respective holders. Use
          of them does not imply any affiliation with or endorsement by them
        </p>
      </div>
    </div>
  );
};

export default Footer;
