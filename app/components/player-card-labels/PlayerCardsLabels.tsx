import React from 'react';
import './playerCardsLabel.scss';
import { SortIcon } from '@/app/icons';

type PlayerCardsLabelsProps = {};

const PlayerCardsLabels: React.FC<PlayerCardsLabelsProps> = () => {
  return (
    <div className="player-cards-labels-container">
      <div className="player-label">
        <p>Player</p>
      </div>
      <div className="projections">
        <div className='label'>Prop <SortIcon size={13} color='gray'/></div>
        <div className='label'>Proj. <SortIcon size={13} color='gray'/></div>
        <div className='label'>Proj. Diff <SortIcon size={13} color='gray'/></div>
        <div className='label'>Average <SortIcon size={13} color='gray'/></div>
        <div className='label'>Rating <SortIcon size={13} color='gray'/></div>
        <div className='label'>L-3 <SortIcon size={13} color='gray'/></div>
        <div className='label'>L-5 <SortIcon size={13} color='gray'/></div>
        <div className='label'>L-10 <SortIcon size={13} color='gray'/></div>
        <div className='label'>Streak <SortIcon size={13} color='gray'/></div>
        <div className='label'>Pick <SortIcon size={13} color='gray'/></div>
        <div className='label'>Sportsbook <SortIcon size={13} color='gray'/></div>
        
      </div>
    </div>
  );
};

export default PlayerCardsLabels;