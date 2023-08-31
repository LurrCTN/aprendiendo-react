// @ts-check
import { test, expect } from '@playwright/test'

const LOCALHOST_URL = 'http://localhost:5173'
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

test('has title', async ({ page }) => {
  await page.goto(LOCALHOST_URL)

  const text = await page.getByRole('paragraph')
  const image = await page.getByRole('img')

  const textContent = await text.textContent()
  const imageUrl = await image.getAttribute('src')

  await expect(textContent).not.toBeNull()
  await expect(textContent?.length).toBeGreaterThan(0)
  await expect(imageUrl?.length).toBeGreaterThan(0)
  await expect(imageUrl?.startsWith(CAT_PREFIX_IMAGE_URL)).toBeTruthy()
})
