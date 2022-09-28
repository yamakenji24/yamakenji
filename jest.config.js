// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextJest = require('next/jest')

const createJestConfig = nextJest({
 // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
 dir: './'
})

const customJestConfig = {
  roots: ['<rootDir>/src'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jsdom',
 }

module.exports = createJestConfig(customJestConfig)