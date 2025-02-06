import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import ProductCard from "../src/components/ProductCard";
import Navbar from "../src/components/Navbar";

describe("Navbar Component", () => {  
  it("renders navbar correctly", async () => {
    render(
      <MemoryRouter>
        <Navbar cartCount={0}/>
      </MemoryRouter>
    );

    // Navigation Links
    const screenLinks = await screen.findAllByRole("link");
    // Cart Object
    const cart = await screen.findByTestId("cart");

    expect(screenLinks).toHaveLength(2);
    expect(cart).toHaveTextContent("0");
  });

  it("matches snapshot", () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Navbar cartCount={0}/>
      </MemoryRouter>
    );

    expect(asFragment()).toMatchSnapshot();
  });

});

// it("", () => {

// });
