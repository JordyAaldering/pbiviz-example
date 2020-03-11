// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  // All imported modules in your tests should be mocked automatically
  automock: true,

  // Respect 'browser' field in package.json when resolving modules
  browser: false,

  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  // An array of regexp pattern strings used to skip coverage collection
  coveragePathIgnorePatterns: [
    'tests',
    'node_modules',
  ],

  // A list of reporter names that Jest uses when writing coverage reports
  coverageReporters: [
    'json',
    'text',
    'lcov',
    'clover',
  ],

  // Make calling deprecated APIs throw helpful error messages
  errorOnDeprecated: true,

  // A path to a module which exports an async function that is triggered once before all test suites
  globalSetup: undefined,

  // A path to a module which exports an async function that is triggered once after all test suites
  globalTeardown: undefined,

  // A set of global variables that need to be available in all test environments
  globals: {},

  // An array of directory names to be searched recursively up from the requiring module's location
  moduleDirectories: [
    'node_modules',
  ],

  // An array of file extensions your modules use
  moduleFileExtensions: [
    'js',
    'jsx',
    'ts',
    'tsx',
    'json',
    'node',
  ],

  // A map from regular expressions to module names that allow to stub out resources with a single module
  moduleNameMapper: {},

  // An array of regexp pattern strings, matched against all module paths before considered 'visible' to the module loader
  modulePathIgnorePatterns: [],

  // The paths to modules that run some code to configure or set up the testing environment before each test
  setupFiles: [],

  // A list of paths to modules that run some code to configure or set up the testing framework before each test
  setupFilesAfterEnv: [],

  // A list of paths to snapshot serializer modules Jest should use for snapshot testing
  snapshotSerializers: [],

  // The test environment that will be used for testing
  testEnvironment: 'node',

  // Options that will be passed to the testEnvironment
  testEnvironmentOptions: {},

  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  testPathIgnorePatterns: [
    'node_modules',
  ],

  // The regexp pattern or array of patterns that Jest uses to detect test files
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.ts?$',

  // Setting this value to 'fake' allows the use of fake timers for functions such as 'setTimeout'
  timers: 'real',

  // A map from regular expressions to paths to transformers
  transform: {
    '^.+\\.js?$': 'babel-jest',
    '^.+\\.ts?$': 'ts-jest',
    '^.+\\.(css|less)$': 'jest-transform-stub',
  },

  // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
  transformIgnorePatterns: [
    'node_modules/(?!('
      + 'powerbi.*'
      + '|lodash-es'
      + ')/)',
  ],

  // An array of regexp pattern strings that are matched against all modules before the module loader will automatically return a mock for them
  unmockedModulePathPatterns: [
    'node_modules/d3.*/dist/',
  ],

  // Indicates whether each individual test should be reported during the run
  verbose: true,
};