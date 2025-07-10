import express from "express";
import { runMedicalWorkflow } from "../_internal/workflow";

const router = express.Router();

// Set up Express route to trigger workflow via API POST request
router.post("/", async (req, res) => {
  try {
    await runMedicalWorkflow(); // Optional: input request body here
    res.status(200).send("Medical form workflow executed successfully!");
  } catch (err) {
    console.error("Error running workflow:", err);
    res.status(500).send("Medical form workflow execution failed.");
  }
});

export default router;