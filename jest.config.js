module.exports = {
  preset: '@react-native/jest-preset',
  setupFiles: ['<rootDir>/jest.setup.js'],
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|react-native-maps|react-redux|react-native-gesture-handler|@reduxjs|immer|@react-native|@react-navigation|@react-native-picker)/)',
  ],
};
