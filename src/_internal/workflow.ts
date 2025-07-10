import { createSession } from "../session";
import { FormData } from "../types/formData";
import { generateData } from "../utils/generateData";
import { mergeData } from "../utils/mergeData";
import { fillForm } from "./fill";
import { submitForm } from "./submit";

export async function runMedicalWorkflow(inputData: Partial<FormData> = {}) {
  const generated = await generateData();
  const data = mergeData(inputData, generated);
  const url =
    process.env.FORM_URL || "https://magical-medical-form.netlify.app/";
  const page = await createSession(url);
  await fillForm(page, data);
  await submitForm(page);
}