"use client";
import React from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import Button from "../button/Button";
import { ProfileIcon, SearchIcon } from "@/app/icons";
import "./navbar.scss";

type NavbarProps = {};
const Navbar: React.FC<NavbarProps> = () => {
  const leagues = ["NBA", "NFL", "MLB", "NCAAB", "NHL", "Soccer"];
  const router = useRouter();
  const pathname = usePathname();

  const currentLeague = pathname?.split("/")[1];

  return (
    <header className="navbar-container">
      <nav className="navbar">
        <div className="logo">
          <Link href="/">
            Prop<span>hit</span>
          </Link>
        </div>

        <div className="links">
        <ul>
            {leagues.map((league) => (
              <li
                key={league}
                onClick={() => router.push(`/${league.toLowerCase()}/props`)}
                className={currentLeague === league.toLowerCase() ? "active-nav-link" : ""}
              >
                {league}
              </li>
            ))}
          </ul>
        </div>

        <div className="user-settings">
          <Button
            label="Contests"
            bgColor="#e9f1fc"
            textColor="#0769de"
            borderColor="#e9f1fc"
          />
          <Button
            label="Upgrade"
            bgColor="#34C759"
            textColor="#FFF"
            borderColor="#34C759"
          />
          <SearchIcon size={20} color="#16191d" />
          <ProfileIcon size={25} color="#16191d" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
