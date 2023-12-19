const path = require('path');
const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig.json');

module.exports = {
  addons: [],
  webpack: {
    alias: {
      '@headlessui': path.resolve(__dirname, 'src/components/common/headless'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@libs': path.resolve(__dirname, 'src/libs'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@tests': path.resolve(__dirname, 'src/__test__'),
      '@store': path.resolve(__dirname, 'src/store'),
      '@interfaces': path.resolve(__dirname, 'src/interfaces'),
      '@apis': path.resolve(__dirname, 'src/apis'),
      '@type': path.resolve(__dirname, 'src/types'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@config': path.resolve(__dirname, 'src/config'),
      '@providers': path.resolve(__dirname, 'src/providers'),
      '@containers': path.resolve(__dirname, 'src/containers'),
      '@services': path.resolve(__dirname, 'src/services'),
    },
  },
  jest: {
    configure: {
      preset: 'ts-jest',
      moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'json'],
      transform: {
        '^.+\\.(js|jsx)?$': 'babel-jest',
      },
      testEnvironment: 'node',
      moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
        prefix: '<rootDir>/',
      }),
      transformIgnorePatterns: ['<rootDir>/node_modules/'],
    },
  },
  style: {
    sass: {
      loaderOptions: {
        additionalData: `
        `,
      },
    },
  },
};
