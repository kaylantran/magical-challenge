import express from "express";
import { fillForm } from "../_internal/fill";
import { submitForm } from "../_internal/submit";
import { createSession } from "../session";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const page = await createSession("https://magical-medical-form.netlify.app/");
    await fillForm(page);
    await submitForm(page);
    res.status(200).send("Medical form workflow executed successfully!");
  } catch (err) {
    console.error("Error running workflow:", err);
    res.status(500).send("Medical form workflow execution failed.");
  }
});

export default router;