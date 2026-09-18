import { fireEvent, render } from "@testing-library/react";

import { Input } from ".";

describe("Input", () => {
  it.each([
    { type: "text", value: "Hello", expected: "Hello" },
    { type: "number", value: "123", expected: 123 },
    { type: "number", value: "Hello", expected: null },
    { type: "number", value: "123.45", expected: 123.45 },
  ] as const)(
    "with type=$type should accept $value and expect $expected",
    ({ type, value, expected }) => {
      const { container } = render(<Input type={type} />);

      const input = container.querySelector("input")!;

      fireEvent.change(input, { target: { value } });

      expect(input).toHaveValue(expected);
    }
  );

  it("does not render abstract role='input'", () => {
    const { container } = render(<Input />);
    const input = container.querySelector("input")!;
    expect(input).not.toHaveAttribute("role", "input");
  });

  it("allows explicit custom role when passed via props", () => {
    const { container } = render(<Input role="combobox" />);
    const input = container.querySelector("input")!;
    expect(input).toHaveAttribute("role", "combobox");
  });
});
