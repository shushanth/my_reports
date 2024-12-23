import { configureStore, combineReducers } from "@reduxjs/toolkit";
import myReportsSlice from "./features/reports-links/reportsLinksSlice";

const reducer = combineReducers({
  myReports: myReportsSlice,
});

const rootStore = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== "production",
});

export const createStore = () => {
  return configureStore({
    reducer,
    devTools: process.env.NODE_ENV !== "production",
  });
};

export type AppStore = ReturnType<typeof createStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
export default rootStore;
