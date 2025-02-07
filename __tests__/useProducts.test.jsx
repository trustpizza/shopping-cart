import { render, screen, waitFor, act } from '@testing-library/react'; // Import act
import { useEffect, useState, useRef } from 'react';
import { MemoryRouter } from 'react-router-dom';
import useProducts from '../src/services/useProducts';
import { vi } from 'vitest';  

describe("useProducts", () => {
  it("should display loading initially and then an error message", async () => {
    vi.useFakeTimers();
    const mockFn = vi.fn();

    const TestComponent = () => {
      const { products, error, loading, ctr } = useProducts();

      useEffect(() => {
        mockFn(loading); // Call the mock function when ctr changes
      }, [ctr]);

      return (
        <div>
          {loading && <p>Loading ...</p>}
          {error && <p>Error: {error}</p>}
          {products && (
            <ul>
              {products.map((product) => (
                <li key={product.id}>{product.title} - ${product.price}</li>
              ))}
            </ul>
          )}
        </div>
      );
    };

    act(() => {
      render(<TestComponent />);
    });

    expect(mockFn).toHaveBeenCalledWith(true); // Initial value
    expect(screen.getByText("Loading ...")).toBeInTheDocument();

    act(() => {
      vi.runAllTimers();
    });

    expect(mockFn).toHaveBeenCalledWith(false);
    expect(screen.queryByText("Loading ...")).not.toBeInTheDocument();
  });
});