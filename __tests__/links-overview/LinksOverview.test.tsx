import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import LinksOverview from "@/app/my-reports/links-overview/LinksOverview";

describe("LinksOverview", () => {
  it("renders component", async () => {
    render(<LinksOverview />);
    const heading = screen.queryByTestId("linksOverview_page--component");
    expect(heading).toBeDefined();
  });

  it("renders component page unchanged", () => {
    const { container } = render(<LinksOverview />);
    expect(container).toMatchSnapshot();
  });
});
