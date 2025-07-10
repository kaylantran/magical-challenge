import { FormData } from "../types/formData";

export function mapData(parsed: Record<string, string>): FormData {
  return {
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
}
