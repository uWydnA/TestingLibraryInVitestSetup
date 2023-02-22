import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { DataList } from "../src/component/DataList";
import React from "react";
const mockDataLength = 3;
const mockData = Array.from({ length: mockDataLength }, (_, index) => ({
  name: `${index}`,
  id: `${index}`,
}));

describe("DataList", () => {
  it("it should be render", () => {
    const { container } = render(<DataList data={mockData} />);
    expect(container).toMatchSnapshot();
  });

  it("it should be createable with createable props", () => {
    const { container } = render(<DataList data={mockData} createable />);
    expect(screen.queryAllByText("create")).toHaveLength(mockData.length);
    expect(screen.queryAllByText("delete")).toHaveLength(mockData.length);
  });

  it("it should not be createable without createable props", () => {
    const { container } = render(<DataList data={mockData} />);
    expect(screen.queryAllByText("create")).toHaveLength(0);
    expect(screen.queryAllByText("delete")).toHaveLength(0);
  });

  it("it should be flex with flex props", () => {
    const { container } = render(<DataList data={mockData} flex />);
    const targets = document.querySelectorAll(".dataItem");
    const matchs = [...targets].filter((item) =>
      item.getAttribute("style")?.includes("flex")
    );
    expect(matchs).toHaveLength(mockData.length);
  });

  it("it should not be flex with flex props", () => {
    const { container } = render(<DataList data={mockData} />);
    const targets = document.querySelectorAll(".dataItem");
    const matchs = [...targets].filter((item) =>
      item.getAttribute("style")?.includes("block")
    );
    expect(matchs).toHaveLength(mockData.length);
  });
});
