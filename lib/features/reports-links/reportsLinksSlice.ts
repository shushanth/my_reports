import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ReportsWithLinks = {
  domain: string;
  url: string;
  sourceType: string;
  date: string;
};

type InitialState = {
  reportsLinks: {
    links: ReportsWithLinks[];
    pagination: {
      pageNumber: number;
      itemsPerPage: number;
    };
  };
};

export type PaginationActions = "increment" | "decrement" | "reset";

const initialState: InitialState = {
  reportsLinks: {
    links: [],
    pagination: {
      pageNumber: 1,
      itemsPerPage: 10,
    },
  },
};

const myReportsLinksSlice = createSlice({
  name: "myReportsLinksSlice",
  initialState,
  reducers: {
    initReports: function (
      state,
      { payload }: PayloadAction<ReportsWithLinks[]>
    ) {
      state.reportsLinks.links = payload;
    },
    pageNumberUpdate: function (state, { payload }: PayloadAction<number>) {
      state.reportsLinks.pagination.pageNumber = payload;
    },
    paginateLinks: function (
      state,
      { payload }: PayloadAction<PaginationActions>
    ) {
      switch (payload) {
        case "increment": {
          const pageNumber = state.reportsLinks.pagination.pageNumber + 1;
          state.reportsLinks.pagination.pageNumber = pageNumber;
          break;
        }
        case "decrement": {
          const pageNumber = state.reportsLinks.pagination.pageNumber - 1;
          state.reportsLinks.pagination.pageNumber = pageNumber;
          break;
        }
        case "reset": {
          state.reportsLinks.pagination.pageNumber = 1;
          break;
        }
        default:
          break;
      }
    },
  },
});

export const { initReports, paginateLinks, pageNumberUpdate } =
  myReportsLinksSlice.actions;

export default myReportsLinksSlice.reducer;
