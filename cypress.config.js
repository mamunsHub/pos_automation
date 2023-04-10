const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'ga93mw',

  defaultCommandTimeout: 5000,
  viewportWidth: 1000,
  viewportHeight: 600,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://pos.reformedtech.org/login/'
  },
});

//