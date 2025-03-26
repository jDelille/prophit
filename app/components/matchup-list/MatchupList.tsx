"use client";
import React, { useEffect, useState } from 'react';
import getSchedule from '@/app/lib/services/getSchedule';
import moment from 'moment';
import MatchupCard from '../matchup-card/MatchupCard';
import './matchupList.scss';

type MatchupListProps = {
 
 }
const MatchupList: React.FC<MatchupListProps> = () => {
    const todaysDate = moment().format("YYYYMMDD");
    const [games, setGames] = useState<any[]>([]);


    useEffect(() => {
        async function fetchGames() {
            const schedule = await getSchedule("nba");
            const gameData = schedule.events[todaysDate] || [];
            setGames(gameData);  // Now storing the data in state
        }

        fetchGames();
    }, []);


  return (
    <div className="matchup-list">
       {games.map((game) => (
        <MatchupCard game={game} key={game.id}/>
       ))}
      
    </div>
  );
};

export default MatchupList;