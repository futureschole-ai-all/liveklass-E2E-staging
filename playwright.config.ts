import { defineConfig, devices } from '@playwright/test';
import 'dotenv/config';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  retries: 1,
  reporter: [
    ['html', { open: 'never' }],
    ['allure-playwright'],
    ['playwright-qase-reporter', {
      mode: 'testops',
      testops: {
        api: { token: process.env.QASE_TESTOPS_API_TOKEN },
        project: process.env.QASE_TESTOPS_PROJECT,
        run: { complete: true },
      },
    }],
  ],
  outputDir: './test-results',
  use: {
    baseURL: process.env.STAGING_LANDING_URL,
    locale: 'ko-KR',
    trace: 'retain-on-failure',
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  projects: [
    // Desktop
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    // { name: 'firefox',  use: { ...devices['Desktop Firefox'] } },
    // { name: 'safari',   use: { ...devices['Desktop Safari'] } },
    // { name: 'edge',     use: { ...devices['Desktop Edge'] } },

    // Mobile
    // { name: 'mobile-chrome',     use: { ...devices['Pixel 5'] } },
    { name: 'mobile-safari',     use: { ...devices['iPhone 13'] } },
    // { name: 'mobile-iphone-se',  use: { ...devices['iPhone SE'] } },
    { name: 'mobile-galaxy',     use: { ...devices['Galaxy S9+'] } },
  ],
});