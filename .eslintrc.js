module.exports = {
    root: true,
    extends: [
      'airbnb-typescript',
      'airbnb/hooks',
      'prettier',
      'prettier/@typescript-eslint',
      'prettier/react',
      'plugin:prettier/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      project: './tsconfig.json',
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-loop-func': 'off',
      '@typescript-eslint/no-redeclare': 'off',
      '@typescript-eslint/no-shadow': 'off',
    },
    settings: {
      'import/resolver': {
        node: {
          paths: ['src'],
          alias: {
            src: './src',
            apis: './src/apis',
            assets: './src/assets',
            images: './src/images',
            styles: './src/styles',
            components: './src/components',
            atoms: './src/atoms',
            molecules: './src/molecules',
            organisms: './src/organisms',
            templates: './src/templates',
            constants: './src/constants',
            dummies: './src/dummies',
            helpers: './src/helpers',
            navigations: './src/navigations',
            screens: './src/screens',
            stores: './src/stores',
            sagas: './src/sagas',
          },
        },
      },
    },
  };
  