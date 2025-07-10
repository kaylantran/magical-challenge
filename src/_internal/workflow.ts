import { createSession } from "../session";
import { FormData } from "../types/formData";
import { generateData } from "../utils/generateData";
import { fillForm } from "./fill";
import { submitForm } from "./submit";

export async function runMedicalWorkflow(inputData: Partial<FormData> = {}) {
  const generated = await generateData();
  const data: FormData = {
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
  const url =
    process.env.FORM_URL || "https://magical-medical-form.netlify.app/";
  const page = await createSession(url);
  await fillForm(page, data);
  await submitForm(page);
}