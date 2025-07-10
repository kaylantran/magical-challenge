import cron from "node-cron";
import { runMedicalWorkflow } from "./_internal/workflow";

cron.schedule("/5 * * * *", async () => {
  console.log("Running scheduled medical form workflow...");

  await runMedicalWorkflow("John", "Doe");
  console.log("Medical form workflow completed.");
});
