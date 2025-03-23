//Tämä testi tarkistaa että käyttäjä näkee Käyttäjät-listassa käyttäjät TestUser1, TestUser2 ja TestUser3 ja että niiden tiedot ovat oikein.

import { test, expect } from '@playwright/test';

const users = [
  { nimimerkki: 'TestUser1', email: 'testuser1@example.com', ika: '25', kaupunki: 'Helsinki', paiva: '2023-01-01' },
  { nimimerkki: 'TestUser2', email: 'testuser2@example.com', ika: '30', kaupunki: 'Espoo', paiva: '2023-02-01' },
  { nimimerkki: 'TestUser3', email: 'testuser3@example.com', ika: '35', kaupunki: 'Tampere', paiva: '2023-03-01' }
];

test('Käyttäjien lista näytetään oikein', async ({ page }) => {
  await page.goto('http://localhost:5173'); // Varmista, että tämä on oikea URL

  // Odota, että lista on latautunut ja käyttäjät näkyvät
  for (const user of users) {
    // Odota, että käyttäjän nimimerkki on näkyvissä
    await page.waitForSelector(`text=${user.nimimerkki}`);

    // Tarkista, että käyttäjä näkyy listassa
    await expect(page.locator(`text=${user.nimimerkki}`)).toBeVisible();
    await expect(page.locator(`text=${user.email}`)).toBeVisible();
    await expect(page.locator(`text=${user.ika}`)).toBeVisible();
    await expect(page.locator(`text=${user.kaupunki}`)).toBeVisible();
    await expect(page.locator(`text=${user.paiva}`)).toBeVisible();
  }
});
