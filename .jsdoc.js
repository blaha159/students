module.exports = {
  plugins: [
    'jsdoc-plugin-typescript',
    'node_modules/jsdoc-vuejs'
  ],
  recurseDepth: 10,
  source: {
    include: [
      'components/',
      'helpers/',
      'pages/',
      'store/',
      '../README.md'
    ],
    includePattern: '\\.(vue|js)$',
    // includePattern: '\\.(vue|js|ts)$',
    exclude: [
      '.nuxt/',
      'dist/',
      'node_modules/',
    ]
  },
  typescript: {
    'moduleRoot': 'store'
  },
  opts: {
    encoding: 'utf8',
  },
};
