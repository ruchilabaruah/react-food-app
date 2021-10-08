import { render, screen } from "@testing-library/react";
import Checkout from "./Checkout";
import { toBeInTheDocument } from "@testing-library/jest-dom";

describe("Check for texts displayed on Checkout screen", () => {
  test("renders 'Your Name' as a label", () => {
    render(<Checkout />);
    const texts = screen.getByText("Your Name", { exact: true });
    expect(texts).toBeInTheDocument();
  });

  test("renders 'Street' as a label", () => {
    render(<Checkout />);
    const texts = screen.getByText("Street", { exact: true });
    expect(texts).toBeInTheDocument();
  });

  test("renders 'Postal Code' as a label", () => {
    render(<Checkout />);
    const texts = screen.getByText("Postal Code", { exact: true });
    expect(texts).toBeInTheDocument();
  });

  test("renders 'City' as a label", () => {
    render(<Checkout />);
    const texts = screen.getByText("City", { exact: true });
    expect(texts).toBeInTheDocument();
  });

  test("renders two buttons", () => {
    render(<Checkout />);
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(2);
  });
});
