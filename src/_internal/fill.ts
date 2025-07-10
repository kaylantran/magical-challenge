import { Page } from "playwright";

export async function fillForm(page:Page) {
  await page.fill("input[name=firstName]", "John");
  await page.fill("input[name=lastName]", "Doe");
  await page.fill("input[name=dateOfBirth]", "1990-01-01");
  await page.fill("input[name=medicalId]", "91927885");
}