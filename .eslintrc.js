// ESLint configuration
// http://eslint.org/docs/user-guide/configuring
module.exports = {
  parserOptions: {
    ecmaVersion: 6,
  },

  extends: [
    'prettier',
  ],

  plugins: ['prettier'],

  env: {
    node: true,
    es6: true,
  },

  rules: {
    // Prefer destructuring from arrays and objects
    // http://eslint.org/docs/rules/prefer-destructuring
    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: {
          array: false,
          object: true,
        },
        AssignmentExpression: {
          array: false,
          object: false,
        },
      },
      {
        enforceForRenamedProperties: false,
      },
    ],

    // ESLint plugin for prettier formatting
    // https://github.com/prettier/eslint-plugin-prettier
    'prettier/prettier': 'error',
  },
};
