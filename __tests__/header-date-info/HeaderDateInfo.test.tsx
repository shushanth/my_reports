import HeaderDateInfo from "@/app/my-reports/headers-date-info/HeadersDateInfo";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("HeaderDateInfo", () => {
  it("renders component", async () => {
    render(<HeaderDateInfo />);
    const heading = screen.queryByTestId("HeaderDateInfo_page--component");
    expect(heading).toBeDefined();
  });

  it("renders component page unchanged", () => {
    const { container } = render(<HeaderDateInfo />);
    expect(container).toMatchSnapshot();
  });
});
