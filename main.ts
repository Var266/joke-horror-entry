// Two-Sentence Horror — make.fun entry (u-suroto-two-sentence-horror-acea9253).
// Writes one original two-sentence horror story to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const STORY =
  "My son's teacher called to say he keeps drawing our house with an extra room that doesn't exist, and in every drawing someone stands in its doorway. " +
  "I told her he has an overactive imagination, then went home and counted the doors in our hallway — there are seven, and I have only ever owned six keys.";

// Gate self-check: the sealed scorer requires UTF-8 text of 1–400
// characters, not only whitespace, and the brief requires exactly two
// sentences. Fail loudly instead of writing an invalid entry.
const sentences = STORY.split(/[.!?]+/).filter((s) => s.trim().length > 0);
if (STORY.length < 1 || STORY.length > 400) {
  throw new Error(`story is ${STORY.length} characters, must be 1–400`);
}
if (STORY.trim().length === 0) {
  throw new Error("story must not be only whitespace");
}
if (sentences.length !== 2) {
  throw new Error(`story has ${sentences.length} sentences, must be exactly 2`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", STORY, "utf8");
