export function pad(n: number): string {
  return String(n).padStart(2, "0");
}

const MONTHS = [
  "Januar", "Februar", "Maerz", "April", "Mai", "Juni",
  "Juli", "August", "September", "Oktober", "November", "Dezember",
];

// "2026-09" -> "September 2026", "2026-10-09" -> "9. Oktober 2026"
export function monthYear(date: string): string {
  const [y, m, d] = date.split("-");
  const month = MONTHS[Number(m) - 1];
  return d ? `${Number(d)}. ${month} ${y}` : `${month} ${y}`;
}

export const SHOP_URL = "https://www.etsy.com/shop/BadassParentsDE";
export const WORDMARK = "Jasmin Schelling";
export const SUBTITLE = "Essays & Notizen";
export const TAGLINE =
  "Realitätscheck statt rosaroter Blödsinn · Notizen aus der Tieferschöpfung";