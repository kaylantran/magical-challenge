import "dotenv-defaults/config";
import cron from "node-cron";
import { runMedicalWorkflow } from "./_internal/workflow";

// Schedule the medical form workflow to run every 5 minutes
cron.schedule("*/5 * * * *", async () => {
  console.log("Running scheduled medical form workflow...");

  try {
    await runMedicalWorkflow();
    console.log("Medical form workflow completed.");
  } catch (err) {
    console.error("Error running scheduled workflow:", err);
  }
});
