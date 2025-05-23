"use client";

import { useState } from "react";
import Categories from "@/components/categories/Categories";
import TrendingPlayersList from "@/components/trending-players/TrendingPlayersList";
import Labels from "@/components/labels/Labels";
import { getLabelsByLeague } from "@/constants/labels";
import Navbar from "@/components/navbar/Navbar";
import Header from "@/components/header/Header";

export default function Home() {


  return (
    <div className="page">

      <div className="main">
{/* 
        <TrendingPlayersList
          
          prop={prop}
          setPropCount={setPropCount}
        /> */}
      </div>

      {/* <Categories setProp={setProp} prop={prop} league={"nba"} /> */}
      {/* <Header propCount={propCount} />
      <Labels labels={labelList} />
      */}
    </div>
  );
}
