import express from "express";
import medicalFormRouter from "./routes/medicalForm";

const app = express();
const port = 3000;

app.use(express.json());
app.use("/runMedicalFormWorkflow", medicalFormRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});