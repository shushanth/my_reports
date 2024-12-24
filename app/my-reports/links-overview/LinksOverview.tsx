import { getLinksApi, Links } from "@/mock_server/linksApi";
import StoreProvider from "@/app/StoreProvider";
import styles from "./linksOverview.module.scss";
import ReportsLinks from "./reports-links/ReportsLinks";

export default async function LinksOverview() {
  const linksResponse = (await getLinksApi()) as Links;
  const { items } = linksResponse;
  const linksData = items.map(({ domain, url, sourceType, updatedAt }) => {
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
    <div
      data-testid="linksOverview_page--component"
      className={styles.links_overview}
    >
      <StoreProvider>
        <ReportsLinks reports={linksData} />
      </StoreProvider>
    </div>
  );
}
