import { Schedule } from "@/app/lib/services/getSchedule";
import store from "@/app/mobx/store";
import moment from "moment";

class PropsFilterLogic {
  private schedule: Schedule;
  private currentLeague: string | undefined;
  private selectedTab: string | null;

  constructor(schedule: Schedule, currentLeague: string | undefined) {
    this.schedule = schedule;
    this.currentLeague = currentLeague;
    this.selectedTab = this.getDefaultActiveProp();
  }

  getTodaysGames() {
    const todaysDate = moment().format("ddd, MMMM, Do");

    return {
      events: Object.values(this.schedule.events)
        .flat()
        .filter((game) => game.status?.detail?.includes(todaysDate)),
    };
  }

  getDefaultActiveProp() {
    switch (this.currentLeague) {
      case "MLB":
        return "Hr";
      case "NBA":
        return "Pts";
      default:
        return "";
    }
  }

  handleSelectTab(prop: string) {
    this.selectedTab = prop;
    store.setProp(prop);
  }

  getSelectedTab() {
    return this.selectedTab;
  }
}

export default PropsFilterLogic;
