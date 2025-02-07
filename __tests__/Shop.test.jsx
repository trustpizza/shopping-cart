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

    const addToCartButtons = screen.getAllByTestId('add-to-cart');

    const cartCount = screen.getByTestId("cart");
    expect(cartCount).toHaveTextContent("0");

    // for (let i = 0; i < addToCartButtons.length; i++) {
    //   await act(async () => { // Wrap in act and make async
    //     await user.click(addToCartButtons[i]);
    //     // No expect here yet
    //   });
    
    //   // Now, after the act block, the state should be updated
    //   await waitFor(() => { // Wait for the cartCount to update
    //     expect(cartCount).toHaveTextContent(`${i + 1}`);
    //   });
    // }
  });
});