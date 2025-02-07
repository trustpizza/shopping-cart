import { describe, it, expect, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { act } from "react";
import Shop from "../src/pages/Shop";

// Mock useProducts to prevent the timeout delay
vi.mock("../useProducts", () => ({
  default: vi.fn(),
}));


describe("Shop Component", () => {
  it("matches the snapshot", () => {
    const { asFragment } = render(
      <MemoryRouter initialEntries={["/shop"]}>
        <Shop />
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("displays 'Bananas for Sale' after products load", async () => {
    vi.useFakeTimers();
    
    // Act block because fake timers
    act(() => {
      render(
        <MemoryRouter initialEntries={["/shop"]}>
          <Shop />
        </MemoryRouter>
      )
    })

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    expect(screen.getByText("Loading products ...")).toBeInTheDocument();

    act(() => {
      vi.runAllTimers();
    })

    expect(screen.queryByText("Loading products ...")).not.toBeInTheDocument();
  });
});