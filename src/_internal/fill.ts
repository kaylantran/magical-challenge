import { Page } from "playwright";

export async function fillPersonal(page: Page) {
  await page.fill("input[name=firstName]", "John");
  await page.fill("input[name=lastName]", "Doe");
  await page.fill("input[name=dateOfBirth]", "1990-01-01");
  await page.fill("input[name=medicalId]", "91927885");
}

export async function fillMedical(page: Page) {
  await page.getByRole("button", { name: "Medical Information" }).click();
  await page.selectOption('select[name="gender"]', { label: "Male" });
  await page.selectOption('select[name="bloodType"]', { label: "O+" });
  await page.fill('textarea[name="allergies"]', "None");
  await page.fill('textarea[name="medications"]', "Ibuprofen");
}