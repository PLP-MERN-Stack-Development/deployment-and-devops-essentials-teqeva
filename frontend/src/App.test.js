import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders welcome message", () => {
  render(<App />);
  const headingElement = screen.getByText(/MERN Stack Application/i);
  expect(headingElement).toBeInTheDocument();
});
