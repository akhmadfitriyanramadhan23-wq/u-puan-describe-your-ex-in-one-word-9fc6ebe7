import { mkdirSync, writeFileSync } from "node:fs";

// One word describing an ex.
// v2 (revised): "Placeholder" — a sharper verdict than "Subscription".
// It says the ex was never the destination, just the seat kept warm
// until the real one arrived. One concrete image, instantly a verdict
// on the person (not on the billing cycle), startling but clear at a
// glance, and anyone who has been one — or had one — nods.
const word = "Placeholder";

// Validate: 1-111 Unicode code points, one word, non-blank.
const count = [...word].length;
if (count < 1 || count > 111) {
  throw new Error(`word is ${count} code points, must be 1-111`);
}
if (!word.trim() || /\s/.test(word)) {
  throw new Error("entry must be exactly one word");
}

mkdirSync("/output", { recursive: true });
// Exactly the word: no trailing newline, no extra whitespace.
writeFileSync("/output/entry.txt", word, "utf8");
