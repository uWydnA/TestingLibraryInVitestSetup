import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { App } from "../src/App";
import React from "react";
describe("App", () => {
  it("it should be render", () => {
    render(<App />);
    expect(screen.getByText("vite")).toBeInTheDocument();
  });
});
