/*
import { test, expect } from '@playwright/test';

test('B00', async ({ page }) => {

  await page.goto("https://dmvol--vrpreuat.sandbox.my.salesforce.com/");
  
  await page.getByRole("textbox", { name: "Username" }).click();
  await page.getByRole("textbox", { name: "Username" }).fill("automationuser45@dmv.ca.gov.vrpreuat");
  await page.getByRole("button", { name: "Log In to Sandbox" }).click();

  await page.getByRole("textbox", { name: "Password" }).click();
  await page.getByRole("textbox", { name: "Password" }).fill("Testtoscauser@2042");
  await page.getByRole("button", { name: "Log In to Sandbox" }).click();

  await page.getByRole("button", { name: "655" }).click();
  await page.getByRole("button", { name: "31" }).click();
  await page.getByRole("button", { name: "031" }).click();
  await page.getByRole("button", { name: "Proceed" }).click();
  await page.getByRole("button", { name: "OK" }).click();
  await page.getByRole("button", { name: "Confirm" }).click();

  await page.getByRole("link", { name: "Home" }).click();

  await page.getByRole("textbox", { name: "VIN/HIN" }).click();
  await page.getByRole("textbox", { name: "VIN/HIN" }).fill("3N1CN8EV3SL493294");
  await page.getByRole("button", { name: "Search", description: "Search" }).click();

  await page.waitForTimeout(2000);
  await page.getByRole("button", { name: "Original Transaction" }).click();

  await page.waitForTimeout(3000);
  await page.getByRole("combobox", { name: "*Transaction type" }).click();
  await page.waitForTimeout(1000);
  await page.getByRole("option", { name: "Original Title and Registration" }).click();
  await page.waitForTimeout(1000);

  await page.locator("vlocity_ins-omniscript-radio:nth-child(16) slot c-radio-group div .slds-radio_faux").first().click();

  await page.waitForTimeout(1000);

  await page.getByRole("textbox", { name: "Title Number" }).fill("123");
  await page.getByRole("combobox", { name: "State of Title" }).click();
  await page.waitForTimeout(1000);
  await page.getByRole("option", { name: "Alabama" }).click();

  await page.getByRole("button", { name: "Next" }).click();
  await page.waitForTimeout(15000);

  await page.getByRole("button", { name: "Next" }).click();
  await page.waitForTimeout(10000);

  await page.locator("(//span[@class='slds-radio_faux'])[7]").click();
  await page.waitForTimeout(3000);

  await page.getByRole("combobox", { name: "Override Type" }).click();
  await page.getByRole("option", { name: "SMOG Certificate Validated by BAR (Y)" }).click();
  await page.waitForTimeout(1000);
  await page.getByRole("button", { name: "Next" }).click();

  await page.waitForTimeout(5000);
  await page.getByRole("button", { name: "Add Owner" }).click();

  await page.getByRole("combobox", { name: "Ownership" }).click();
  await page.getByRole("option", { name: "Registered Owner" }).click();

  await page.locator("(//span[@class='slds-radio_faux'])[1]").check();
  await page.waitForTimeout(1000);

  await page.getByRole("textbox", { name: "Driver's License/ID Card" }).fill("I9356126");
  await page.waitForTimeout(1000);

  await page.getByRole("textbox", { name: "Address Line 1 and Line" }).fill("123 Mission Street");
  await page.getByRole("textbox", { name: "City" }).fill("San Francisco");
  await page.getByRole("textbox", { name: "Zip/Postal Code" }).fill("91504");

  await page.getByRole("combobox", { name: "County" }).click();
  await page.getByRole("option", { name: "San Francisco" }).click();

  await page.waitForTimeout(1000);
  await page.getByRole("button", { name: "Verify Address" }).click();
  await page.waitForTimeout(1000);
  await page.getByRole("button", { name: "Use Selected Address" }).click();
  await page.getByRole("button", { name: "Save", exact: true }).click();

  await page.locator("(//span[@title='Ownership Information'])[1]").click();

  await page.waitForTimeout(6000);
  await page.getByRole("button", { name: "Cost and Purchase Information" }).click();

  await page.locator("(//button[@aria-label='*Date first operated in California'])[1]").click();
  await page.getByLabel("Tue Oct 06 2026").click();
  await page.getByRole("textbox", { name: "*Purchase Price" }).fill("10000");

  await page.getByRole("button", { name: "*Purchase Date" }).click();
  await page.waitForTimeout(5000);
  await page.locator("(//span[@aria-label='Tue Oct 06 2026'][normalize-space()='6'])[2]").click();

  await page.waitForTimeout(5000);

  await page.getByRole("button", { name: "Odometer Information" }).click();
  await page.waitForTimeout(1000);

  await page.locator("(//span[@class='slds-radio_faux'])[15]").click();
  await page.getByRole("textbox", { name: "Odometer Mileage Reading" }).fill("600");

  await page.locator("(//span[@class='slds-radio_faux'])[17]").click();
  await page.getByRole("combobox", { name: "Odometer Reading Status" }).click();
  await page.locator("span", { hasText: "Actual" }).first().click();

  await page.getByRole("textbox", { name: "Explain Odometer Reading Status (Recommended)" }).fill("test");
  await page.getByRole("button", { name: "Odometer Information" }).click();

  await page.waitForTimeout(5000);
  await page.getByRole("button", { name: "Vehicle Verifier Details" }).click();

  await page.waitForTimeout(5000);
  await page.locator("vlocity_ins-omniscript-radio:nth-child(14) slot c-radio-group div .slds-radio_faux").first().click();

  await page.getByRole("group", { name: "* A paper Verification of" }).getByLabel("Yes").check();
  await page.waitForTimeout(1000);

  await page.getByRole("combobox", { name: "Verifying Agency" }).click();
  await page.getByRole("option", { name: "DMV" }).click();

  await page.getByRole("textbox", { name: "*Tech ID" }).fill("123");
  await page.waitForTimeout(2000);

  await page.getByRole("button", { name: "Vehicle Verifier Details" }).click();
  await page.waitForTimeout(2000);

  await page.waitForTimeout(5000);
  await page.getByRole("button", { name: "License Plate" }).click();

  await page.waitForTimeout(2000);
  await page.locator("span .slds-radio_faux").first().click();
  await page.getByRole("radio", { name: "Yes" }).check();

  await page.getByRole("combobox", { name: "*The out of state license" }).click();
  await page.getByRole("option", { name: "Are Expired" }).click();
  await page.locator("(//button[normalize-space()='Next'])[1]").click();

  await page.waitForTimeout(5000);
  await page.locator("(//span[@class='slds-radio_faux'])[7]").click();

  await page.waitForTimeout(3000);
  await page.getByRole("combobox", { name: "Override Type" }).click();
  await page.getByRole("option", { name: "SMOG Certificate Validated by BAR (Y)" }).click();

  await page.getByRole("button", { name: "Next" }).click();
  await page.waitForTimeout(30000);

  await page.evaluate("document.body.style.zoom='60%'");

  // Fee Summary Validation
  await expect(
    page.locator("//tr[td[contains(., 'Current Registration')]]//td[3]//input[@type='text']")
  ).toHaveValue("$73.00", { timeout: 20000 });

  await page.waitForTimeout(15000);
  await page.getByRole("button", { name: "Next" }).click();

  await page.waitForTimeout(15000);
  await page.getByRole("button", { name: "Next" }).click();

  await page.waitForTimeout(15000);
  await page.evaluate("document.body.style.zoom='100%'");

  // Payment popup
  const payment = await page.locator("div.order-to-pay-amount lightning-formatted-number").textContent();
  const amount = payment?.substring(1);

  await page.getByRole("button", { name: "Make payment" }).click();
  await page.waitForTimeout(2000);

  await page.locator("(//span[normalize-space()='Cash'])[1]").click();
  await page.waitForTimeout(2000);

  await page.locator(`//button[normalize-space()="${amount}"]`).click();
  await page.waitForTimeout(2000);

  await page.locator("button.slds-button.slds-button_brand.tender-payment-make-payment-button").click();
  await page.waitForTimeout(2000);

  await page.getByRole("button", { name: "Continue" }).click();
});
*/