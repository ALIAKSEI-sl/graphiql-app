import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Test from "./test";

describe("App", () => {
  test("renders headline", () => {
    render(<Test />);
    const headline = screen.getByText(/It works and you found me!/i);
    expect(headline).toBeInTheDocument();
  });
});
