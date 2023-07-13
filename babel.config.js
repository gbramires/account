module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '*': './src',
          '@global': './src/global',
          '@tests': './__tests__',
          '@components': './src/components',
          '@screens': './src/screens',
          '@hooks': './src/hooks',
        },
      },
    ],
  ],
};
