import { describe, it, expect, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { act } from "react";
import Shop from "../src/pages/Shop";
import useProducts from "../src/services/useProducts";

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
    // First mock: Loading state
    <MemoryRouter initialEntries={["/shop"]}>
      <Shop />
    </MemoryRouter>
    const heading = await screen.findByRole("heading");

    expect(heading).toBeInTheDocument();
    // expect(screen.getByRole("heading")).toBeInTheDocument();
    // expect(screen.getByRole("heading")).toHaveTextContent("Bananas for Sale")
  });

  it("")
});