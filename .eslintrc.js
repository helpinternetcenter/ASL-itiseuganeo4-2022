module.exports = {
    extends: ['standard', 'standard-react'],
    plugins: ['react-hooks'],
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'off',
      'react/prop-types': 'off'
    },
    env: {
      jest: true
    },
    globals: {
      __DEV__: true
    }
  }