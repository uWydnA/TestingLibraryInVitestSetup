import { describe, expect, it } from "vitest";
import { logDOM, render, screen } from "@testing-library/react";
import { DataList } from "../src/component/DataList";
const mockData = new Array(2)
  .fill(true)
  .map((_, index) => ({ name: `${index}`, id: `${index}` }));
describe("DataList", () => {
  it("it should be render", () => {
    const { container } = render(<DataList data={mockData} />);
    expect(container).toMatchSnapshot();
  });

  it("it should be render with data", () => {});

  it.skip("it should be render with className", () => {});

  it("it should be editable with editable props", () => {
    const { container } = render(<DataList data={mockData} editable />);
    expect(screen.queryAllByText("编辑")).toHaveLength(mockData.length);
    expect(screen.queryAllByText("删除")).toHaveLength(mockData.length);
  });

  it("it should not be editable without editable props", () => {
    const { container } = render(<DataList data={mockData} />);
    expect(screen.queryAllByText("编辑")).toHaveLength(0);
    expect(screen.queryAllByText("删除")).toHaveLength(0);
  });

  it("it should be horizontal with horizontal props", () => {
    const { container } = render(<DataList data={mockData} horizontal />);
    const targets = document.querySelectorAll(".dataitem");
    const matchs = [...targets].filter((item) =>
      item.getAttribute("style").includes("flex")
    );
    expect(matchs).toHaveLength(mockData.length);
  });

  it("it should not be horizontal with horizontal props", () => {
    const { container } = render(<DataList data={mockData} />);
    const targets = document.querySelectorAll(".dataitem");
    const matchs = [...targets].filter((item) =>
      item.getAttribute("style").includes("block")
    );
    expect(matchs).toHaveLength(mockData.length);
  });
});
