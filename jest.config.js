module.exports = {
  testEnvironment: 'jsdom',
  preset: "ts-jest",
  roots: ['<rootDir>/src/'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.jest.json',
    },
  },
  moduleDirectories: ['node_modules', '<rootDir>'],
  testPathIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/src/__tests__/utils',
    '<rootDir>/src/__tests__/data',
  ],
}