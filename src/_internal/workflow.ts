import { createSession } from "../session";
import { fillForm } from "./fill";
import { submitForm } from "./submit";

export async function runMedicalWorkflow(
  firstName: string,
  lastName: string
): Promise<void> {
  const url =
    process.env.FORM_URL || "https://magical-medical-form.netlify.app/";
  const page = await createSession(url);
  await fillForm(page, firstName, lastName);
  await submitForm(page);
}