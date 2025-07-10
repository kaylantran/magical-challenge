export const formGenerationPrompt = `Generate fake but realistic patient 
  medical form data with the following fields:
  - First Name
  - Last Name
  - Date of Birth (YYYY-MM-DD)
  - Medical ID (8-digit number)
  - Gender (Male/Female/Other/Prefer not to say)
  - Blood Type (A+, A-, B+, B-, AB+, AB-, O+, O-)
  - Allergies (comma-separated or "None")
  - Medications (comma-separated or "None")
  - Emergency Contact Name
  - Emergency Contact Phone (in format (XXX)XXX-XXXX)

  Return as a single-line JSON object, no extra text.
  `;