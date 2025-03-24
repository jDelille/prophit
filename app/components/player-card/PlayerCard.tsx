import React from "react";
import { Selection } from "@/app/lib/services/getDraftkingsData";
import "./playerCard.scss";

type Player = {
  id: string;
  headshot: string;
  name: string;
  position: string;
  propType: string;
  team: string;
  teamLogo: string;
  value: string;
  selections: Selection[];
};

type PlayerCardProps = {
  player: Player;
  playerStats: {
    points: {
      latest3Avg: string;
      latest5Avg: string;
      latest10Avg: string;
      projectedPoints: number;
      latest3Percentage: number;
      latest5Percentage: number;
      latest10Percentage: number;
    };
  };
};

const PlayerCard: React.FC<PlayerCardProps> = ({ player, playerStats }) => {
  const { id, headshot, name, position, propType, team, value, teamLogo } =
    player;

  const handleBetType = (betType: string) => {
    switch (betType) {
      case "Total Points":
        return "Pts";
      case "Total Assists":
        return "Ast";
      case "Total Rebounds":
        return "Reb";
      case "Total Points & Rebounds":
        return "Pts + Reb";
      case "Total Points & Assists":
        return "Pts + Ast";
      case "Total Points, Rebounds, & Assists":
        return "Pts + Reb + Ast";
      default:
        return "NULL";
    }
  };

  function formatDifference(value: number): {
    formattedValue: string;
    className: string;
  } {
    if (value > 0) {
      return { formattedValue: `+${value.toFixed(1)}`, className: "positive" };
    } else if (value < 0) {
      return { formattedValue: `${value.toFixed(1)}`, className: "negative" };
    } else {
      return { formattedValue: `${value.toFixed(1)}`, className: "neutral" };
    }
  }

  function isOverOrUnder(prop: number, projection: number) {
    if (projection >= prop) {
      return "Over";
    } else {
      return "Under";
    }
  }

  function getPercentageClass(percentage: number) {
    if (percentage > 70) return "above-70";
    if (percentage >= 60) return "mid-range";
    return "below-50";
  }

  return (
    <div className="player-card">
      <div className="player-card" key={id + propType}>
        <div className="player-headshot">
          <img src={headshot} alt={name} />
        </div>
        <div className="info">
          <div className="name">{name}</div>
          <div className="player-info">
            {position} - {team}
          </div>
        </div>
        <div className="projections">
          <div className="prop column">
            <p className="med-font">{player.selections[0]?.points}</p>
            <p className="small-font">{propType}</p>
          </div>
          <div className="proj column">
            <p className="med-font">{playerStats.points.projectedPoints}</p>
            <p className={`small-font ${isOverOrUnder(
                parseFloat(player.selections[0]?.points),
                playerStats.points.projectedPoints
              )}`}>{isOverOrUnder(
                parseFloat(player.selections[0]?.points),
                playerStats.points.projectedPoints
              )}</p>
          </div>
          <div className="proj-diff column">
            <div
              className={`med-font ${
                formatDifference(
                  playerStats.points.projectedPoints -
                    parseFloat(player.selections[0]?.points)
                ).className
              }`}
            >
              {
                formatDifference(
                  playerStats.points.projectedPoints -
                    parseFloat(player.selections[0]?.points)
                ).formattedValue
              }
            </div>
          </div>
          <div className="avg column">
            <p className="med-font">{player.selections[0].statistic.value}</p>
          </div>
          <div className="rating column">
            <div className="small-font">NULL</div>
          </div>
          <div
            className={`l-3 column ${getPercentageClass(
              playerStats.points.latest3Percentage
            )}`}
          >
            <div className="med-font">
              {playerStats.points.latest3Percentage}%
            </div>
          </div>

          <div
            className={`l-5 column ${getPercentageClass(
              playerStats.points.latest5Percentage
            )}`}
          >
            <div className="med-font">
              {playerStats.points.latest5Percentage}%
            </div>
          </div>

          <div
            className={`l-10 column ${getPercentageClass(
              playerStats.points.latest10Percentage
            )}`}
          >
            <div className="med-font">
              {playerStats.points.latest10Percentage}%
            </div>
          </div>
          <div className="streak column">
            <div className="small-font">NULL</div>
          </div>
          <div className="pick column">
            <div className="small-font">
              {isOverOrUnder(
                parseFloat(player.selections[0]?.points),
                playerStats.points.projectedPoints
              )}
            </div>
          </div>
          <div className="sportsbook column">
            <div className="small-font">Draftkings</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
