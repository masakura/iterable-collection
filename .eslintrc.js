module.exports = {
  extends: 'airbnb',
  env: {
    es6: true,
    node: true,
  },
  ecmaFeatures: {
    "generators": true,
  },
  plugins: [
    'react',
  ],
  rules: {
    "strict": 0,
  },
};
