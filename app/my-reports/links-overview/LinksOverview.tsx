import { getLinksApi, Links } from "../../../mock_server/linksApi";
import StoreProvider from "../../StoreProvider";
import styles from "./linksOverview.module.scss";
import ReportsLinks from "./reports-links/ReportsLinks";

export default async function () {
  const linksResponse = (await getLinksApi()) as Links;
  const { items } = linksResponse;
  const linksData = items.map(({ id, domain, url, sourceType, updatedAt }) => {
    const date = new Date(updatedAt);
    const currentDate = date.toLocaleDateString();
    return {
      domain,
      url,
      sourceType,
      date: currentDate,
    };
  });
  return (
    <div className={styles.links_overview}>
      <StoreProvider>
        <ReportsLinks reports={linksData} />
      </StoreProvider>
    </div>
  );
}
