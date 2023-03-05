import { render } from "@testing-library/react";
import UiThemeSwitch from "./ui-theme-switch";

describe("UiThemeSwitch", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<UiThemeSwitch />);
    expect(baseElement).toBeTruthy();
  });
});
