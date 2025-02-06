import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom"; // Import MemoryRouter
import routes from "../src/routes/routes";

import Homepage from "../src/pages/Homepage";

describe("Homepage Component", () => {
  it("matches the snapshot", () => {
    const { asFragment } = render(
      <MemoryRouter initialEntries={['/']}>  {/* Simulate the initial route */}
        <Homepage />
      </MemoryRouter>
    );

    // Take a snapshot of the rendered component
    expect(asFragment()).toMatchSnapshot();
  });
  
  it("renders correct heading", () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Homepage />
      </MemoryRouter>
    )
      
    const heading = screen.getByRole("heading")
    expect(heading.textContent).toMatch(/Bananazon!/i)
  });

})
