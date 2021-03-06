const path = require("path");

module.exports = {
  roots: ["<rootDir>/src"],
  displayName: "Tester",
  testMatch: ["**/__tests__/**/*.{ts,tsx}"],
  testURL: "http://localhost",
  setupFilesAfterEnv: [path.resolve(__dirname, "./src/setupTests.ts")],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  globals: {
    "ts-jest": {
      tsConfig: "<rootDir>/src/tsconfig.json"
    }
  },
  moduleFileExtensions: ["ts", "tsx", "js", "json"]
};
