import { Page } from "playwright";

export async function submitForm(page:Page) {
  await page.click('button[type="submit"]') 
}