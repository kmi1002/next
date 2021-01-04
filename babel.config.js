module.exports = {
  presets: ['next/babel'],
  plugins: [
    ['styled-components', { ssr: true }],
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.ios.ts', '.android.ts', '.ts', '.ios.tsx', '.android.tsx', '.tsx', '.jsx', '.js', '.json'],
        alias: {
          '@src': './src',
          '@apis': './src/apis',
          '@assets': './src/assets',
          '@images': './src/assets/images',
          '@styles': './src/assets/styles',
          '@components': './src/components',
          '@atoms': './src/components/atoms',
          '@molecules': './src/components/molecules',
          '@organisms': './src/components/organisms',
          '@templates': './src/components/templates',
          '@constants': './src/constants',
          '@dummies': './src/dummies',
          '@helpers': './src/helpers',
          '@navigations': './src/navigations',
          '@pages': './src/pages',
          '@stores': './src/stores',
          '@sagas': './src/sagas',
        },
      },
    ],
  ],
};
