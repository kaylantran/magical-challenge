import express from "express";
import { main } from "./main";

const app = express();
const port = 3000;

app.use(express.json());

app.post("/runMedicalFormWorkflow", async (req, res) => {
  try {
    await main();
    res.status(200).send("Medical form workflow executed successfully!");
  } catch (err) {
    console.error("Error running workflow:", err);
    res.status(500).send("Medical form workflow execution failed.");
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});