import "./playerStats.scss";

// Ensure the correct types are defined for the props:
type PlayerStatsProps = {
  events: string[];
};

const PlayerStats: React.FC<PlayerStatsProps> = ({ events }) => {


  return (
    <div>
      <div className="stats-list">
        {events.map((stats, eventIndex) => (
          <p className="stats" key={eventIndex}>
            {stats}
          </p>
        ))}
      </div>
    </div>
  );
};

export default PlayerStats;
