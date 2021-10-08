import { render, screen } from "@testing-library/react";
import AvailableMeals from "./AvailableMeals";

describe("Async tests", () => {
  test("renders meals", async () => {
    // Mock the fetch API
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => {
        return {
          m1: {
            description: "Finest fish and veggies",
            name: "Sushi",
            price: 22.99,
          },
        };
      },
    });
    render(<AvailableMeals />);

    // Assertion
    const listItems = await screen.findAllByRole("listitem");
    expect(listItems).not.toHaveLength(0);
  });
});
