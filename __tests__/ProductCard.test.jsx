import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import ProductCard from "../src/components/ProductCard";

describe("ProductCard Component", () => {
  const mockProduct = {
    image: "https://via.placeholder.com/150",
    title: "Sample Product",
    price: "$19.99",
  };

  it("snapshot", () => {
    const { asFragment } = render(
      <MemoryRouter>
        <ProductCard
          title={mockProduct.title}
          image={mockProduct.image}
          price={mockProduct.price}
          onClick={() => {}}
        />
      </MemoryRouter>
    );

    // Verify that the rendered ProductCard matches the snapshot
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders product cards correctly", () => {
    render(
      <MemoryRouter>
        <ProductCard
          title={mockProduct.title}
          image={mockProduct.image}
          price={mockProduct.price}
          onClick={() => {}}
        />
      </MemoryRouter>
    );

    // Check for Product Card image
    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", mockProduct.image);

    // Check for Product Card title text
    expect(screen.getByText(mockProduct.title)).toBeInTheDocument();

    // Check for Product Card price text
    expect(screen.getByText(/Price: \$/)).toBeInTheDocument();
    // Check for Product Card quantity input
    const input = screen.getByRole("spinbutton", { name: /quantity/i });
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue(1);

    // Check for Add to Cart button
    const addToCartButton = screen.getByRole("button", { name: /add to cart/i });
    expect(addToCartButton).toBeInTheDocument();
  });

  it("calls onClick function when called", async () => {
    const onClick = vi.fn(); // Mock the onClick function
    const user = userEvent.setup();

    render(
      <MemoryRouter>
        <ProductCard
          title={mockProduct.title}
          image={mockProduct.image}
          price={mockProduct.price}
          onClick={onClick}
        />
      </MemoryRouter>
    );

    // Check that the button exists
    const addToCartButton = screen.getByRole("button", { name: /add to cart/i });
      // Simulate Add to Cart button click
    await user.click(addToCartButton);

    // Ensure onClick is called
    expect(onClick).toHaveBeenCalledTimes(1);
  })

  it("updates quantity input value when changed", async () => {
    render(
      <MemoryRouter>
        <ProductCard
          title={mockProduct.title}
          image={mockProduct.image}
          price={mockProduct.price}
          onClick={() => {}}
        />
      </MemoryRouter>
    );

    const user = userEvent.setup();
    const qtySelector = screen.getByRole("spinbutton", { name: "Quantity" })
    // Default value is 1
    expect(qtySelector).toHaveValue(1);
    
    await userEvent.clear(qtySelector);
    await userEvent.type(qtySelector, "3");

    expect(qtySelector).toHaveValue(3);
  });
});
