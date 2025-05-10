// @ts-check
import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

const testDir = defineBddConfig({
  paths: ['tests/features/*.feature'],
  require: ['tests/steps/*.js'],
  features: 'tests/features/***.feature',
  steps: ['tests/steps/***steps.js', 'tests/fixtures/fixture.js', "tests/hooks/hooks.js" ],  
});

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir,
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  //workers: process.env.CI ? 1 : undefined,
  workers: 1,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
timeout:100000,
  use: {
    trace: 'on-first-retry',    
    screenshot: 'only-on-failure',    
    video: 'retain-on-failure',  // 🔹 Solo guarda el video si la prueba falla
    //video: 'on', // 🔹 Guarda el video siempre
    headless: false, // <-- Agrega esto
    navigationTimeout: 50000, // <-- Aumenta el tiempo de espera de navegación
    actionTimeout: 10000, // <-- Aumenta el tiempo de espera de acción
  },
  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

  ],

});