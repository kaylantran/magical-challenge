import { createSession } from "../session";
import { fillForm } from "./fill";
import { submitForm } from "./submit";

export async function runMedicalWorkflow(): Promise<void> {
  const page = await createSession("https://magical-medical-form.netlify.app/");
  await fillForm(page);
  await submitForm(page);
}