module.exports = {
  verbose: false,
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest",
    // "^.+\\.(tsx?|js)$": "ts-jest",
  },
  testRegex: "(src)/.*\\.test\\.tsx?$",
  moduleDirectories: ["./node_modules", "./src"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy",
  },
  preset: 'ts-jest',
  testEnvironment: "jsdom",
  transformIgnorePatterns: [
    "node_modules/(?!@arcgis)",
    "node_modules/(?!@esri)"
  ]
};
