import { generateText } from "ai";
import { model } from "../_internal/setup";
import { formGenerationPrompt } from "../prompts/formPrompt";
import { FormData } from "../types/formData";
import { cleanJSON } from "./cleanRes";
import { mapData } from "./mapData";

export async function generateData(): Promise<FormData> {
  const response = await generateText({ model, prompt: formGenerationPrompt });
  const clean = cleanJSON(response.text.trim());
  try {
    const parsed = JSON.parse(clean);
    return mapData(parsed);
  } catch (err) {
    console.error("Failed to parse generated JSON:", response.text);
    throw new Error("Invalid LLM response format.");
  }
}