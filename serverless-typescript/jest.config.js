module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "^.+\\.(ts|tsx|js)?$": "ts-jest",
  },
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ["./src/**/*.{js,jsx,ts,tsx}"],
  coverageDirectory: "coverage",
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70,
    },
  },
  moduleDirectories: ["node_modules"],
  moduleNameMapper: {
    "/^@lambdaLayer/(.*)$": "<rootDir>/src/shared/$1",
  },
  testPathIgnorePatterns: ["\\\\node_modules\\\\", "dist", "coverage"],
};
