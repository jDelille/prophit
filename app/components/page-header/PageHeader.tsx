"use client";

import React from "react";
import { usePathname } from "next/navigation";
import "./pageHeader.scss";

type PageHeaderProps = {
  title: string;
  todaysDate: string;
};
const PageHeader: React.FC<PageHeaderProps> = ({ title, todaysDate }) => {
  const pathname = usePathname();
  const currentLeague = pathname?.split("/")[1].toUpperCase();

  return (
    <div className="page-header">
      <div className="title-wrapper">
        <h1 className="title">
          {currentLeague} {title}
        </h1>
        <p className="description">Trending {currentLeague} Props for {todaysDate} </p>
      </div>
      {/* <SearchBar query={query} /> */}
    </div>
  );
};

export default PageHeader;
