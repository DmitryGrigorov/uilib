module.exports = {
  verbose: true,
  preset: "ts-jest",
  // Jest's 5s default is too tight for the puppeteer-based visual tests:
  // launching a real Chrome process (especially with many parallel workers
  // competing for CPU/disk) routinely takes longer than that on its own,
  // before any navigation/screenshot work even starts.
  testTimeout: 30000,
  moduleNameMapper: {
    "##/(.*)$": "<rootDir>/src/$1"
  },
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
    ".+\\.(css|png|jpg|ttf|woff|woff2)$": "jest-transform-stub"
  },
  testMatch: ["**/*.test.{ts,tsx}"],
  transformIgnorePatterns: [
    `<rootDir>/node_modules/(?!(@dmitrygrigorov/icons|puppeteer|puppeteer-core|@puppeteer)/).+\\.(js|jsx|ts|tsx)`
  ],
  modulePathIgnorePatterns: [
    "<rootDir>/publish-components/",
    "<rootDir>/publish-icons/"
  ],
  collectCoverageFrom: ["**/*.{ts,tsx}", "!**/*.stories.tsx"],
  testEnvironment: "jsdom",
  // jest-environment-jsdom defaults testEnvironmentOptions.customExportConditions
  // to ["browser"], which makes jest-resolve pick the "browser" condition
  // out of any dependency's package.json "exports" map - including
  // puppeteer's `ws`, whose browser export is just a stub that throws "ws
  // does not work in the browser". Puppeteer swallows that and misreports
  // it as "The browser is already running for <dir>". Clearing this back to
  // Node's normal conditions fixes `ws` (and any other Node-only dep
  // required from a test file) without affecting jsdom itself.
  testEnvironmentOptions: {
    customExportConditions: ["node"]
  },
  setupFiles: ["jest-canvas-mock"],
  setupFilesAfterEnv: ["./jest.setup.ts"]
};
