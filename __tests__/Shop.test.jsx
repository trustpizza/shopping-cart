import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import Shop from "../src/pages/Shop";

describe("Shop Component", () => {
  const mockProduct = {
    image: "https://via.placeholder.com/150",
    title: "Sample Product",
    price: "$19.99",
  };

  it("matches the snapshot", () => {
    const { asFragment } = render(
      <MemoryRouter initialEntries={['/shop']}>
        <Shop />
      </MemoryRouter>
    );;
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correct heading", () => {
    render(
      <MemoryRouter initialEntries={['/shop']}>
        <Shop />
      </MemoryRouter>
    );
    const heading = screen.getByRole("heading");
    expect(heading.textContent).toMatch(/Bananas for Sale/i);
  });

  // it("shows the number of items in the cart", () => {
  //   // This test assumes the Shop page displays a Cart item count

  //   // Assuming you have a cart state or context displaying the number of items
  //   const cartCount = screen.getByText(/items in cart/i); // Update with correct text based on implementation
  //   expect(cartCount).toBeInTheDocument();
  //   expect(cartCount.textContent).toMatch(/\d+/); // Expect a number to be displayed
  // });
});
