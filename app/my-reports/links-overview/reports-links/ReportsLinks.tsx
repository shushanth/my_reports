"use client";
import React from "react";
import { useAppSelector, useAppStore } from "../../../../store-lib/hooks";
import * as Ui from "../../../../ui-lib/components";
import {
  initReports,
  paginateLinks,
  pageNumberUpdate,
} from "../../../../store-lib/features/reports-links/reportsLinksSlice";
import { totalLinksPagesCount } from "../../../../store-lib/features/reports-links/reportsLinksSelector";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store-lib/store";
import ReportsAction from "./actions/ReportsAction";
export type ReportsData = {
  domain: string;
  url: string;
  sourceType: string;
  date: string;
};

export type ReportsLinks = {
  reports: ReportsData[];
};

export default function ReportsLinks({ reports }: ReportsLinks) {
  const store = useAppStore();
  const initStore = React.useRef<boolean>(false);
  if (!initStore.current) {
    store.dispatch(initReports(reports));
    initStore.current = true;
  }
  const currentPage = useAppSelector(
    (state: RootState) => state.myReports.reportsLinks.pagination.pageNumber
  );
  const { totalPageNumbers, currentPageLinks } =
    useSelector(totalLinksPagesCount);
  const onNextClick = () => {
    store.dispatch(paginateLinks("increment"));
  };
  const onPrevClick = () => {
    store.dispatch(paginateLinks("decrement"));
  };
  const onCountClick = (count: number) => {
    store.dispatch(pageNumberUpdate(count));
  };
  const getHeaderData = () => ["domain", "url", "sourceType", "Date"];
  return (
    <Ui.Card headerContent={<ReportsAction />}>
      <Ui.Grid>
        <>
          <Ui.GridHeader data={getHeaderData()} />
          <Ui.GridContent data={currentPageLinks} />
          <Ui.GridFooter>
            <Ui.Pagination
              currentPage={currentPage}
              count={totalPageNumbers}
              onCountClick={onCountClick}
              onNextClick={onNextClick}
              onPrevClick={onPrevClick}
            />
          </Ui.GridFooter>
        </>
      </Ui.Grid>
    </Ui.Card>
  );
}
