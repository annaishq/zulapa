export function escape(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
}

// Sounds in the International Phonetic Alphabet. The slashes around them
// are drawn by the style, not written.
export function ipa(sounds) {
  return `<span class="ipa">${escape(String(sounds).replace(/^\/|\/$/g, ""))}</span>`
}

// Code that is sounds between two slashes, such as `/afo/`, is IPA.
export const isIpa = text => /^\/[^\s/]+\/$/.test(text)

export function slugify(value) {
  return value
    .toLowerCase()
    .trim()
    .replace(/<[^>]+>/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
}
