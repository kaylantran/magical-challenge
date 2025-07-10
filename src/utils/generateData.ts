import { generateText } from "ai";
import { model } from "../_internal/setup";

export async function generateData(): Promise<{
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  medicalId: string;
  gender: string;
  bloodType: string;
  allergies: string;
  medications: string;
  emergencyContactName: string;
  emergencyContactPhone: string;
}> {
  const prompt = `Generate fake but realistic patient 
  medical form data with the following fields:
  - First Name
  - Last Name
  - Date of Birth (YYYY-MM-DD)
  - Medical ID (8-digit number)
  - Gender (Male/Female/Other/Prefer not to say)
  - Blood Type (A+, A-, B+, B-, AB+, AB-, O+, O-)
  - Allergies (comma-separated or "None")
  - Medications (comma-separated or "None")
  - Emergency Contact Name
  - Emergency Contact Phone (in format (XXX)XXX-XXXX)

  Return as a single-line JSON object, no extra text.
  `;
  const response = await generateText({model, prompt});
  const raw = response.text.trim();
  const clean = raw.replace(/```json|```/g,"").trim();
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
      emergencyContactPhone: parsed["Emergency Contact Phone"]
    };
    return data;
  } catch(err) {
    console.error("Failed to parse generated JSON:", response.text);
    throw new Error("Invalid LLM response format.");
  }
}