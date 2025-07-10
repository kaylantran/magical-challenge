import { Page } from "playwright";
import { FormData } from "../types/formData";

// Fill personal information 
export async function fillPersonal(page: Page, data: FormData) {
  await page.fill("input[name=firstName]", data.firstName);
  await page.fill("input[name=lastName]", data.lastName);
  await page.fill("input[name=dateOfBirth]", data.dateOfBirth);
  await page.fill("input[name=medicalId]", data.medicalId);
}

// Fills medical details
export async function fillMedical(page: Page, data: FormData) {
  await page.getByRole("button", { name: "Medical Information" }).click();
  await page.selectOption('select[name="gender"]', { label: data.gender });
  await page.selectOption('select[name="bloodType"]', {
    label: data.bloodType,
  });
  await page.fill('textarea[name="allergies"]', data.allergies);
  await page.fill('textarea[name="medications"]', data.medications);
}

// Fills emergency contact information
export async function fillEmergency(page: Page, data: FormData) {
  await page.getByRole("button", { name: "Emergency Contact" }).click();
  await page.getByRole("textbox", { name: "Emergency Contact Name" }).click();
  await page
    .getByRole("textbox", { name: "Emergency Contact Name" })
    .fill(data.emergencyContactName);
  await page.getByRole("textbox", { name: "Emergency Contact Phone" }).click();
  await page
    .getByRole("textbox", { name: "Emergency Contact Phone" })
    .fill(data.emergencyContactPhone);
}

// Runs the full form fill workflow
export async function fillForm(page: Page, data: FormData) {
  await fillPersonal(page, data);
  await fillMedical(page, data);
  await fillEmergency(page, data);
}
