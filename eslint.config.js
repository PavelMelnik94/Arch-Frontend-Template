import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: true,
  react: true,

  rules: {

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
