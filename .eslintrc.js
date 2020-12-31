module.exports = {
  extends: ['airbnb', 'airbnb/hooks', 'prettier', 'prettier/react'],
  plugins: ['prettier', 'import', 'react', 'react-hooks-ssr', 'json'],
  parser: 'babel-eslint',
  env: {
    browser: true,
    jest: true,
  },
  rules: {
    /** devtime rules. these error on build */
    'prettier/prettier': 'warn',
    'no-console': 'warn',
    'no-empty-function': 'warn',
    'react/self-closing-comp': 'warn',
    'no-unused-expressions': 'warn',
    'no-unused-vars': [
      'warn',
      { argsIgnorePattern: '^__', varsIgnorePattern: '^__' },
    ],

    /** eslint */
    camelcase: 'off',
    'max-classes-per-file': 'off',
    'spaced-comment': 'off',
    'no-mixed-operators': 'off',
    'no-restricted-globals': 'off',
    'no-underscore-dangle': 'off',
    'padded-blocks': 'warn',
    'prefer-destructuring': 'off',
    'prefer-object-spread': 'off',
    'prefer-promise-reject-errors': 'off',
    'react/jsx-boolean-value': 'off',
    'consistent-return': 'warn',
    'no-param-reassign': [
      'error',
      { props: true, ignorePropertyModificationsFor: ['draft'] },
    ], //allows for immer-style mutations https://github.com/immerjs/immer/issues/189

    /** import */
    'import/order': 'off',
    'import/no-cycle': 'warn',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/extensions': 0, //this is a hack to allow js to import ts without the extension
    'import/prefer-default-export': 'off', //we should be doing named exports https://humanwhocodes.com/blog/2019/01/stop-using-default-exports-javascript-module/

    /** a11y */
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/aria-role': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/control-has-associated-label': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/mouse-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',

    /** react */
    'react/jsx-curly-brace-presence': 'off',
    'react/button-has-type': 'off',
    'react/default-props-match-prop-types': 'off',
    'react/destructuring-assignment': 'off',
    'react/forbid-prop-types': ['warn', { forbid: ['any'] }],
    'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx'] }],
    'react/jsx-fragments': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/no-access-state-in-setstate': 'off',
    'react/no-array-index-key': 'off',
    'react/no-find-dom-node': 'off',
    'react/no-typos': 'off',
    'react/no-unescaped-entities': 'off',
    'react/no-unused-prop-types': 'off',
    'react/no-unused-state': 'off',
    'react/no-will-update-set-state': 'off',
    'react/prefer-stateless-function': 'off',
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'react/sort-comp': 'off',
    'react/state-in-constructor': 'off',
    'react/static-property-placement': 'off',

    /** ssr rules */
    'react-hooks-ssr/react-hooks-global-ssr': ['warn'],
  },
};
