module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  rootDir: 'test',
  testTimeout: 60 * 1000,
  setupFiles: [
    "dotenv/config"
  ],
  globals: {
    // 'ts-jest': {
    //   tsConfig: 'tsconfig.json',
    // },
  },
  // "setupFilesAfterEnv": ["<rootDir>/setup.ts"]
};
