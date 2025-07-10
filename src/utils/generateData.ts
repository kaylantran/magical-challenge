import { generateText } from "ai";
import { model } from "../_internal/setup";
import { formGenerationPrompt } from "../prompts/formPrompt";
import { FormData } from "../types/formData";
import { cleanJSON } from "./cleanRes";

export async function generateData(): Promise<FormData> {
  const response = await generateText({ model, prompt: formGenerationPrompt });
  const clean = cleanJSON(response.text.trim());
  try {
    const parsed = JSON.parse(clean);
    const data = {
      firstName: parsed["First Name"],
      lastName: parsed["Last Name"],
      dateOfBirth: parsed["Date of Birth"],
      medicalId: parsed["Medical ID"],
      gender: parsed["Gender"],
      bloodType: parsed["Blood Type"],
      allergies: parsed["Allergies"],
      medications: parsed["Medications"],
      emergencyContactName: parsed["Emergency Contact Name"],
      emergencyContactPhone: parsed["Emergency Contact Phone"],
    };
    return data;
  } catch (err) {
    console.error("Failed to parse generated JSON:", response.text);
    throw new Error("Invalid LLM response format.");
  }
}