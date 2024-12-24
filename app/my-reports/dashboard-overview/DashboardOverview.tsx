import * as Ui from "@/ui-lib/components";
import { Reports, getReportsApi } from "@/mock_server/reportsApi";
import styles from "./dashboardOverview.module.scss";
import MediaContent from "./media/MediaContent";
import MediaHeader from "./media/MediaHeader";
import LinksHeader from "./links/LinksHeader";
import RemovedContent from "./links/removed-content/RemovedContent";
import InfringersContent from "./links/infringers-content/InfringersContent";

export default async function DashboardOverview() {
  const reportsResponse = (await getReportsApi()) as Reports;
  const {
    topDomains,
    general: { views, media, value },
    chart: { totalRemoval, manuallySubmitted },
  } = reportsResponse;
  return (
    <div
      data-testid="dashboardOverview_page--component"
      className={`${styles.dashboard_overview}`}
    >
      <div className={`${styles.dashboard_overview}_media`}>
        <Ui.Card
          type="primary"
          headerContent={<MediaHeader title="Views Lost" />}
          bodyContent={<MediaContent mediaContent={views} />}
        ></Ui.Card>
        <Ui.Card
          type="primary"
          headerContent={<MediaHeader title="Total Media Removal" />}
          bodyContent={<MediaContent mediaContent={media} />}
        ></Ui.Card>
        <Ui.Card
          type="primary"
          headerContent={<MediaHeader title="Value of Removed Leaks" />}
          bodyContent={<MediaContent mediaContent={value} type="dollar" />}
        ></Ui.Card>
      </div>
      <div className={`${styles.dashboard_overview}_links`}>
        <Ui.Card
          type="primary"
          headerContent={<LinksHeader title="Total Links Removed" />}
          bodyContent={
            <RemovedContent
              removed={totalRemoval}
              submitted={manuallySubmitted}
            />
          }
        ></Ui.Card>
        <Ui.Card
          type="primary"
          headerContent={<LinksHeader title="Top Infringers" />}
          bodyContent={<InfringersContent data={topDomains} />}
        ></Ui.Card>
      </div>
    </div>
  );
}
