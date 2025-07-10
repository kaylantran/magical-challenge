export function cleanJSON(raw: string): string {
  return raw.replace(/```json|```/g, "").trim();
}