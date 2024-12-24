import DashboardOverview from "./dashboard-overview/DashboardOverview";
import HeaderDateInfo from "./headers-date-info/HeadersDateInfo";
import LinksOverview from "./links-overview/LinksOverview";
import styles from "./myreports.module.scss";

export default function Reports() {
  return (
    <div className={styles.reports} data-testid="myReports_page--component">
      <HeaderDateInfo />
      <div className="hz-line"></div>
      <DashboardOverview />
      <LinksOverview />
    </div>
  );
}
