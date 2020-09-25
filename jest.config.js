module.exports = {
    collectCoverage: true,
    coverageDirectory: '<rootDir>/coverage',
    collectCoverageFrom: [
        '<rootDir>/src/**/*.*',
    ],

    // A list of paths to directories that Jest should use to search for test files in.
    roots: [
        './tests',
    ],
};
