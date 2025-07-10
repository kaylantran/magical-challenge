import { generateText } from "ai";
import { model } from "../_internal/setup";
import { formGenerationPrompt } from "../prompts/formPrompt";
import { FormData } from "../types/formData";
import { cleanJSON } from "./cleanRes";
import { mapData } from "./mapData";

export async function generateData(): Promise<FormData> {
  // Use Gemini LLM to generate fake but realistic medical form data
  const response = await generateText({ model, prompt: formGenerationPrompt });
  // Clean and parse LLM response to ensure valid JSON
  const clean = cleanJSON(response.text.trim());
  const parsed = JSON.parse(clean);
  try {
    // Map LLM-labeled fields to internal keys
    return mapData(parsed);
  } catch (err) {
    console.error("Failed to parse generated JSON:", response.text);
    throw new Error("Invalid LLM response format.");
  }
}