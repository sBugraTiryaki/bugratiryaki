const WORDS_PER_MINUTE = 200;

export function calculateReadingTime(content: string): number {
  const text = content.replace(/```[\s\S]*?```/g, "").replace(/[#*_`>\-]/g, "");
  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(wordCount / WORDS_PER_MINUTE));
}
