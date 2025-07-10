import { Page } from "playwright";

export async function fillPersonal(
  page: Page,
  firstName: string,
  lastName: string
) {
  await page.fill("input[name=firstName]", firstName);
  await page.fill("input[name=lastName]", lastName);
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

export async function fillEmergency(page: Page) {
  await page.getByRole("button", { name: "Emergency Contact" }).click();
  await page.getByRole("textbox", { name: "Emergency Contact Name" }).click();
  await page
    .getByRole("textbox", { name: "Emergency Contact Name" })
    .fill("Jane Doe");
  await page.getByRole("textbox", { name: "Emergency Contact Phone" }).click();
  await page
    .getByRole("textbox", { name: "Emergency Contact Phone" })
    .fill("(415)123-4567");
}

export async function fillForm(
  page: Page,
  firstName: string,
  lastName: string
) {
  await fillPersonal(page, firstName, lastName);
  await fillMedical(page);
  await fillEmergency(page);
}
