import { runMedicalWorkflow } from "./_internal/runMedicalFormWorkflow";

export async function main() {
  await runMedicalWorkflow("John", "Doe");
}
