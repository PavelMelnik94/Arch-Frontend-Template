import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: true,
  react: true,

  rules: {
    'regexp/no-obscure-range': 'warn',
    'perfectionist/sort-imports': [
      'error',
      {
        alphabet: 'asc',
        newlinesBetween: 'always',
        order: 'asc',
        // groups: [
        //   'external',
        //   'builtin',
        //   'internal',
        //   'parent',
        //   'sibling',
        //   'index',
        // ],
      },
    ],

  },

})
