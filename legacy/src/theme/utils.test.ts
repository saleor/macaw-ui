import { changeColorMeta } from "./utils";

describe("Changing color meta tag", () => {
  it("works properly if no tag is present", () => {
    // Given
    document.head.innerHTML = `
            <meta name="tag1" content="value1" />
    `;

    // When
    changeColorMeta("#FF0000");

    // Then
    expect(
      document.querySelector('head meta[name="tag1"]')?.getAttribute("content")
    ).toBe("value1");
    expect(
      document
        .querySelector('head meta[name="theme-color"]')
        ?.getAttribute("content")
    ).toBe("#FF0000");
  });
  it("works properly if tag is present", () => {
    // Given
    document.head.innerHTML = `
        <meta name="tag1" content="value1" />
        <meta name="theme-color" content="#00FF00" />
    `;

    // When
    changeColorMeta("#FF0000");

    // Then
    expect(
      document.querySelector('head meta[name="tag1"]')?.getAttribute("content")
    ).toBe("value1");
    expect(
      document
        .querySelector('head meta[name="theme-color"]')
        ?.getAttribute("content")
    ).toBe("#FF0000");
  });
});
