import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import MyReports from "@/app/my-reports/page";

describe("MyReports", () => {
  it("renders component", async () => {
    render(<MyReports />);
    const heading = screen.queryByTestId("myReports_page--component");
    expect(heading).toBeDefined();
  });

  it("renders component page unchanged", () => {
    const { container } = render(<MyReports />);
    expect(container).toMatchSnapshot();
  });
});
