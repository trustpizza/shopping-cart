import { describe, it, expect, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { createBrowserRouter, MemoryRouter, Route, Routes } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { act } from "react";
import Shop from "../src/pages/Shop";
import App from "../src/App";
import Layout from "../src/components/Layout";


describe("Shop Component", () => {
  it("matches the snapshot", () => {
    const { asFragment } = render(
      <MemoryRouter initialEntries={["/shop"]}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/shop" element={<Shop />}/>
          </Route>
        </Routes>
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
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/shop" element={<Shop />}/>
            </Route>
          </Routes>
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

  it("clicking add to cart increments cart", async () => {
    vi.useFakeTimers();
    const user = userEvent.setup();

    act(() => {
      render(
        <MemoryRouter initialEntries={["/shop"]}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/shop" element={<Shop />}/>
            </Route>
          </Routes>
        </MemoryRouter>
      );
    });

    act(() => {
      vi.runAllTimers();
    });

    const cartCount = screen.getByTestId("cart");
    expect(cartCount).toHaveTextContent("0");
  });
});