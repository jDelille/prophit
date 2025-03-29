"use client";
import React, { useEffect, useState } from 'react';
import getSchedule from '@/app/lib/services/getSchedule';
import moment from 'moment';
import MatchupCard from '../matchup-card/MatchupCard';
import getMatchupData from '@/app/lib/services/getMatchupData';
import MatchupCardLabels from '../matchup-card-labels/MatchupCardLabels';
import './matchupList.scss';

type MatchupListProps = {
 
 }
const MatchupList: React.FC<MatchupListProps> = () => {
    const todaysDate = moment().format("YYYYMMDD");
    const [games, setGames] = useState<any[]>([]);


    useEffect(() => {
      async function fetchGames() {
          const schedule = await getSchedule("nba");

          // Extract event IDs (numbers only) and fetch matchup data
          const matchupPromises = schedule.sectionList[0].events.map(async (game) => {
              const eventId = game.id.replace(/\D/g, ""); 
              const matchupData = await getMatchupData("nba", eventId);
              return { ...game, matchupData };
          });

          const gamesWithMatchups = await Promise.all(matchupPromises);

          setGames(gamesWithMatchups);
      }

      fetchGames();
  }, []);



  return (
    <div className="matchup-list">
      <MatchupCardLabels />
       {games.map((game) => (
        <MatchupCard game={game} key={game.id}/>
       ))}
      
    </div>
  );
};

export default MatchupList;