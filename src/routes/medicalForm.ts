import express from "express";
import { runMedicalWorkflow } from "../_internal/workflow";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { firstName, lastName } = req.body;
    await runMedicalWorkflow(firstName, lastName);
    res.status(200).send("Medical form workflow executed successfully!");
  } catch (err) {
    console.error("Error running workflow:", err);
    res.status(500).send("Medical form workflow execution failed.");
  }
});

export default router;