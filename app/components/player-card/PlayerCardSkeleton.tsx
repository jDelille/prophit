import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css"; // Ensure you import the styles

type PlayerCardSkeletonProps = {};

const PlayerCardSkeleton: React.FC<PlayerCardSkeletonProps> = () => {
  return (
    <SkeletonTheme baseColor="#E1E7EC" highlightColor="#F0F4F8">
      <div className="player-skeleton-cards" style={{ width: "100%" }}>
        {Array.from({ length: 25 }).map((_, index) => (
          <div
            key={index}
            className="player-card-skeleton"
            style={{
              display: "flex",
              width: "100%",
            }}
          >
            <Skeleton
              height={50}
              width="100%"
              containerClassName="skeleton-container"
            />
          </div>
        ))}
      </div>
    </SkeletonTheme>
  );
};

export default PlayerCardSkeleton;
