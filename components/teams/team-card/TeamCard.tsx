import React from 'react';
import styles from './TeamCard.module.scss';
import { Team } from '@/types/teams';


type TeamCardProps = {
    team: Team;
 
 }
const TeamCard = React.forwardRef<HTMLDivElement, TeamCardProps>(({ team }, ref) => {
  return (
    <div ref={ref} className={styles.team}>
      <p>{team.displayName}</p>
    </div>
  );
});

TeamCard.displayName = "TeamCard";

export default TeamCard;