// @ts-check
/* eslint-disable import/no-extraneous-dependencies */

import 'dotenv/config';
import { expect } from '@playwright/test';
import _ from 'lodash';

process.env.NODE_ENV = 'test';

expect.extend({
  async toHaveCountValidationErrors(page, expected) {
    const options = {
      comment: 'Checks the number of validation errors on the page',
    };

    const textElements = await page.locator('.invalid-feedback').allInnerTexts();
    const validationErrorsCount = textElements
      .filter((text) => !_.isEmpty(text))
      .length;

    const message = () => (`
      ${this.utils.matcherHint(this.constructor.name, undefined, undefined, options)}\n
      Expected: ${this.utils.printExpected(expected)}
      Received: ${this.utils.printReceived(validationErrorsCount)}
    `);

    return {
      pass: validationErrorsCount === expected,
      message,
    };
  },
});

export default {
  workers: 1,
  maxFailures: 1,
  testDir: './__tests__',
  outputDir: './tmp/artifacts',
  use: {
    baseURL: 'http://localhost:3000',
    browserName: 'chromium',
    headless: true,
    screenshot: 'only-on-failure',
    viewport: { width: 1600, height: 900 },
  },
  // NOTE: каждый тестовый файл запускаем в отдельном процессе
  // В ином случае при вызове init(app) возникает ошибка,
  // так как код мутирует инстанс fastify, а часть библиотек имеет глобальное состояние
  projects: [
    { testMatch: /10-prepare/ },
    { testMatch: /20-session/ },
    { testMatch: /30-users/ },
    { testMatch: /40-taskStatuses/ },
    { testMatch: /50-labels/ },
    { testMatch: /60-tasks/ },
  ],
};
