module.exports = {
  "roots": [
    "<rootDir>/src"
  ],
  "testMatch": [
    "**/tests/**/?(*.)+(spec|test).+(ts)",
  ],
  "transform": {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
}