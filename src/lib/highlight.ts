import { codeToHtml } from "shiki";

/** Server only: shiki's WASM grammar engine must not ship to the client. */
export function highlightCode(code: string, lang: string) {
  return codeToHtml(code, {
    lang,
    themes: { light: "github-light", dark: "github-dark" },
    defaultColor: false,
  });
}
