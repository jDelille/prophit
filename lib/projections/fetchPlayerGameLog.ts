import axios from "axios";
import { getBaseURL } from "../services/getBaseURL";

export const fetchPlayerGameLog = async (
  playerId: string,
  sport: string,
  league: string
) => {
  const baseURL = getBaseURL();
  const response = await axios.get(
    `${baseURL}/api/espn/gamelog?sport=${sport}&league=${league}&playerId=${playerId}`
  );
  return response.data;
};