import * as Ui from "../../ui-lib/components";
import DashboardOverview from "./dashboard-overview/DashboardOverview";
import LinksOverview from "./links-overview/LinksOverview";
import styles from "./myreports.module.scss";

export default function Reports() {
  return (
    <div className={styles.reports}>
      <div className={`${styles.reports}_headers_date`}>
        <div className={`${styles.reports}_headers_date_headers`}>
          <Ui.Heading title="My Reports" level="page" variant="h1" />
          <Ui.Label level="primary" size="small">
            A detailed report of content removal activities, including
            infringements, media removals, and insights into impacted value and
            top offenders.
          </Ui.Label>
        </div>
        <div className={`${styles.reports}_headers_date_date`}>
          October 2024
        </div>
      </div>

      <div className="hz-line"></div>
      <DashboardOverview />
      <LinksOverview />
    </div>
  );
}
