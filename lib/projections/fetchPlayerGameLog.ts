import { getBaseURL } from "../services/getBaseURL";


export const fetchPlayerGameLog = async (
  playerId: string,
  sport: string,
  league: string
) => {
  const baseURL = getBaseURL();
  const res = await fetch(
    `${baseURL}/api/espn/gamelog?sport=${sport}&league=${league}&playerId=${playerId}`
  );
  if (!res.ok) throw new Error("Failed to fetch gamelog");
  return res.json();
};
