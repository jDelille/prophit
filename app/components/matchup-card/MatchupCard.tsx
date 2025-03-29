import React from "react";
import { MatchupData } from "@/app/lib/services/getMatchupData";
import "./matchupCard.scss";

type Team = {
  name: string;
  logoUrl: string;
  isLoser: boolean;
  imageAltText: string;
  stackedNameTop: string;
  stackedNameBottom: string;
  record: string;
  score: number;
};

type Game = {
  upperTeam: Team;
  lowerTeam: Team;
  matchupData: MatchupData[];
};

type MatchupCardProps = {
  game: Game;
};
const MatchupCard: React.FC<MatchupCardProps> = ({ game }) => {
  console.log(game);
  const homeTeam = game.lowerTeam;
  const awayTeam = game.upperTeam;

  return (
    <div className="matchup-card">
      <div className="teams">
        <div className="team">
          <div className="info">
            <img src={homeTeam.logoUrl} alt="" />
            <h2 className="name">{homeTeam.stackedNameBottom} </h2>
            <p className="score">{homeTeam.score || 0} </p>
          </div>
        </div>
        <div className="team">
          <div className="info">
            <img src={awayTeam.logoUrl} alt="" />
            <h2 className="name">{awayTeam.stackedNameBottom} </h2>
            <p className="score">{awayTeam.score || 0}</p>
          </div>
        </div>
      </div>
      <div className="matchup-data">
        <div className="odds">
          {game.matchupData[0].model.odds.rows[0].values[0].odds}
        </div>
      </div>
    </div>
  );
};

export default MatchupCard;
