module.exports = {
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.jest.json',
    },
  },
  moduleDirectories: ['node_modules', '<rootDir>', '<rootDir>/src'],
  modulePathIgnorePatterns: ['./cypress'],
  testPathIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/src/__tests__/utils',
    '<rootDir>/src/__tests__/data',
  ],
}