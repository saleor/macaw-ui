export function changeColorMeta(color: string) {
  const themeColorTag = document.createElement("meta");
  themeColorTag.setAttribute("content", color);
  themeColorTag.setAttribute("name", "theme-color");

  const existingColorTag = document.head.querySelector(
    'meta[name="theme-color"]'
  );
  if (existingColorTag) {
    existingColorTag.remove();
  }
  document.head.appendChild(themeColorTag);
}
