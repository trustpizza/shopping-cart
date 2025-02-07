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
  
  it("renders all images with correct alt attributes", () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Homepage />
      </MemoryRouter>
    );

    // Define expected images and their corresponding alt texts
    const expectedImages = [
      { alt: "Bananazon!", src: "src/assets/logo-black.png" },
      { alt: "Bananazon!", src: "src/assets/logo-white.png" },
    ];

    const images = screen.getAllByRole("img");

    expect(images.length).toBe(expectedImages.length);

    images.forEach((img, index) => {
      expect(img).toHaveAttribute("alt", expectedImages[index].alt);
      expect(img).toHaveAttribute("src", expect.stringContaining(expectedImages[index].src));
    });
  });
})
