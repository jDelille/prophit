"use client";
import React from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import Button from "../button/Button";
import { HamburgerMenuIcon, ProfileIcon, SearchIcon } from "@/app/icons";
import "./navbar.scss";
import useModal from "@/app/hooks/useModal";

type NavbarProps = {};
const Navbar: React.FC<NavbarProps> = () => {
  const leagues = ["NBA", "MLB"];
  const router = useRouter();
  const pathname = usePathname();
  const { openModal } = useModal();

  const currentLeague = pathname?.split("/")[1];

  const handleLoginClick = () => {
    openModal("login");
  };

  return (
    <header className="navbar-container">
      <nav className="navbar">
        <div className="logo">
          <div className="hide-mobile">
            <Link href="/">
              Prop<span>hit</span>
            </Link>
          </div>
          <div className="mobile-logo">
            <Link href="/">
              P<span>h</span>
            </Link>
          </div>
        </div>

        <div className="links">
          <ul>
            {leagues.map((league) => (
              <li
                key={league}
                onClick={() => router.push(`/${league.toLowerCase()}/props`)}
                className={
                  currentLeague === league.toLowerCase()
                    ? "active-nav-link"
                    : ""
                }
              >
                {league}
              </li>
            ))}
          </ul>
        </div>

        <div className="user-settings">
          <div className="hide-mobile">
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
              onClick={handleLoginClick}
            />
            <SearchIcon size={20} color="#16191d" />
            <ProfileIcon size={25} color="#16191d" />
          </div>
        </div>

        <div className="hamburger-menu">
          <HamburgerMenuIcon size={26} color="gray" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
