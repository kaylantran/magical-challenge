import { fillForm } from "./_internal/fill";
import { submitForm } from "./_internal/submit";
import { createSession } from "./session";

export async function main() {
  const page = await createSession("https://magical-medical-form.netlify.app/");
  await fillForm(page);
  await submitForm(page);
}
