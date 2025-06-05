import React, { useEffect, useRef, useState } from "react";
import getTeamsByLeague from "@/lib/services/getTeamsByLeague";
import styles from "./Teams.module.scss";
import { Teams as TeamsType } from "@/types/teams";
import TeamCard from "./team-card/TeamCard";
import { gsap } from "gsap";

type TeamsProps = {};

const Teams: React.FC<TeamsProps> = () => {
  const [teams, setTeams] = useState<TeamsType[]>([]);

  const teamRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    async function fetchTeams() {
      const teamsData = await getTeamsByLeague("baseball", "mlb");
      setTeams(teamsData);
    }
    fetchTeams();
  }, []);

  useEffect(() => {
    if (!teams.length || teamRef.current.length === 0) return;

    gsap.set(teamRef.current, { y: 50, opacity: 0 });

    const tl = gsap.timeline();

    tl.to(teamRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.6,
      ease: "power3.out",
      stagger: 0.15,
    });

    return () => {
      tl.kill();
    };
  }, [teams]);

  return (
    <div className={styles.teams}>
      {teams.map((team, index) => (
        <TeamCard
          key={team.team.id}
          team={team.team}
          ref={(el) => {
            teamRef.current[index] = el;
          }}
        />
      ))}
    </div>
  );
};

export default Teams;
