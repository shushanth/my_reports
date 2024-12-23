import { RootState } from "../../store";
import { createSelector } from "@reduxjs/toolkit";

export const totalLinksPagesCount = createSelector(
  (state: RootState) => state.myReports.reportsLinks.links,
  (state: RootState) => state.myReports.reportsLinks.pagination,
  (links, pagination) => {
    const { pageNumber, itemsPerPage } = pagination;
    let currentPageLinks = [...links];
    if (pageNumber === 1) {
      currentPageLinks = currentPageLinks.slice(0, itemsPerPage);
    }
    if (pageNumber > 1) {
      currentPageLinks = currentPageLinks.slice(
        (pageNumber - 1) * 10,
        itemsPerPage * pageNumber
      );
    }
    const totalPageNumbers = Math.ceil(links.length / itemsPerPage);
    return { totalPageNumbers, currentPageLinks };
  }
);
