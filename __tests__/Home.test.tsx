import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Home", () => {
  it("renders component", () => {
    render(<Home />);
    const heading = screen.queryByTestId("home_page--component");
    expect(heading).toBeDefined();
  });

  it("renders component unchanged", () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });
});
