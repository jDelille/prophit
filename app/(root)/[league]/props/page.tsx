import { PropsFilter } from "@/app/components/filter";
import PageHeader from "@/app/components/page-header/PageHeader";
import PlayerCardsLabels from "@/app/components/player-card-labels/PlayerCardsLabels";
import PlayerList from "@/app/components/player-list/PlayerList";
import SearchBar from "@/app/components/search-bar/SearchBar";
import getSchedule from "@/app/lib/services/getSchedule";
import moment from "moment";

export default async function Props({
  searchParams,
}: {
  searchParams: {
    query: string;
  };
}) {
  const todaysDate = moment().format("MMM DD, YYYY");
  const query = (await searchParams).query;
  const schedule = await getSchedule("nba");

  return (
    <section className="props-page">
      <PageHeader
        title="Player Props"
        todaysDate={todaysDate}
        description={`Trending NBA Props for ${todaysDate}`}
      />
      <PropsFilter query={query} schedule={schedule}  />
      <PlayerCardsLabels />
      <PlayerList />
    </section>
  );
}
