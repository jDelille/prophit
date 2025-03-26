import React from "react";
import "./matchupCard.scss";

type Game = {
  competitors: {
    id: string;
    altColor: string;
    displayName: string;
    isHome: boolean;
    logo: string;
    score: number;
    teamColor: string;
  }[];
  date: string;
  status: {
    id: string;
    state: string;
    detail: string;
  };
  venue: {
    fullName: string;
    address: {
      city: string;
      state: string;
    };
  };
};

type MatchupCardProps = {
  game: Game;
};
const MatchupCard: React.FC<MatchupCardProps> = ({ game }) => {
  console.log(game);
  const homeTeam = game.competitors[0];
  const awayTeam = game.competitors[1];

  return (
    <div className="matchup-card">
      <div className="teams">
        <div className="team">
          <div className="info">
            <img src={homeTeam.logo} alt="" />
            <h2 className="name">{homeTeam.displayName}</h2>
            <p className="score">{homeTeam.score}</p>
          </div>
        </div>
        <div className="team">
          <div className="info">
            <img src={awayTeam.logo} alt="" />
            <h2 className="name">{awayTeam.displayName}</h2>
            <p className="score">{awayTeam.score}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchupCard;
