import PropsFilter from "@/app/components/filter/PropsFilter";
import PageHeader from "@/app/components/page-header/PageHeader";
import PlayerCardsLabels from "@/app/components/player-card-labels/PlayerCardsLabels";
import PlayerList from "@/app/components/player-list/PlayerList";
import SearchBar from "@/app/components/search-bar/SearchBar";
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
  // console.log(playerStats)

  return (
    <section className="props-page">
      <PageHeader title="Player Props" todaysDate={todaysDate} />
      <PropsFilter query={query} />
      <PlayerCardsLabels />
      <PlayerList />
    </section>
  );
}
