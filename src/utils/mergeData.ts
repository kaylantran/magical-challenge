import { FormData } from "../types/formData";

export function mergeData(inputData: Partial<FormData>, generated: FormData): FormData {
  return {
    firstName: inputData.firstName ?? "John",
    lastName: inputData.lastName ?? "Doe",
    dateOfBirth: inputData.dateOfBirth ?? "1990-01-01",
    medicalId: inputData.medicalId ?? "91927885",
    gender: inputData.gender ?? generated.gender,
    bloodType: inputData.bloodType ?? generated.bloodType,
    allergies: inputData.allergies ?? generated.allergies,
    medications: inputData.medications ?? generated.medications,
    emergencyContactName:
      inputData.emergencyContactName ?? generated.emergencyContactName,
    emergencyContactPhone:
      inputData.emergencyContactPhone ?? generated.emergencyContactPhone,
  };
}