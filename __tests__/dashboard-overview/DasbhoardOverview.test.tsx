import DashboardOverview from "@/app/my-reports/dashboard-overview/DashboardOverview";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("DashboardOverview", () => {
  it("renders component", async () => {
    render(<DashboardOverview />);
    const heading = screen.queryByTestId("dashboardOverview_page--component");
    expect(heading).toBeDefined();
  });

  it("renders component page unchanged", () => {
    const { container } = render(<DashboardOverview />);
    expect(container).toMatchSnapshot();
  });
});
