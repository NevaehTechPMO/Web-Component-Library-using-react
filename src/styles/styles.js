export async function loadStyleSheet(path) {
  const sheet = new CSSStyleSheet();
  const css = await fetch(path).then((r) => r.text());
  sheet.replaceSync(css);
  return sheet;
}
