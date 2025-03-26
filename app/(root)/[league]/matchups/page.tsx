import { PropsFilter } from "@/app/components/filter";
import MatchupList from "@/app/components/matchup-list/MatchupList";
import PageHeader from "@/app/components/page-header/PageHeader";
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
        title="Matchups"
        todaysDate={todaysDate}
        description={`${todaysDate} Matchups`}
      />
      <PropsFilter query={query} schedule={schedule} hideFilterOptions />
      <MatchupList />
    </section>
  );
}
