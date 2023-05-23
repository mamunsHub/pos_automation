const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'ga93mw',

  defaultCommandTimeout: 5000,
  viewportWidth: 1280,
  viewportHeight: 720,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://pos.reformedtech.org/login/'
  },
});

//