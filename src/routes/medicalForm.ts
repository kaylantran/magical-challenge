import express from "express";
import { runMedicalWorkflow } from "../_internal/runMedicalFormWorkflow";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    await runMedicalWorkflow();
    res.status(200).send("Medical form workflow executed successfully!");
  } catch (err) {
    console.error("Error running workflow:", err);
    res.status(500).send("Medical form workflow execution failed.");
  }
});

export default router;