module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/essential',
        '@vue/airbnb'
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'indent': [1, 4],
        'no-var': 1,
        'no-empty': 1,
        'no-ex-assign': 1,
        'no-extra-parens': 1,
        'no-extra-semi': 1,
        'no-irregular-whitespace': 2,
        'curly': 2,
        'default-case': 2,
        'eqeqeq': 1,
        'no-extra-label': 2,
        'no-multi-spaces': 2,
        'no-unmodified-loop-condition': 2,
        'no-useless-catch': 1,
        'no-useless-return': 2,
        'require-await': 2,
        'no-undef-init': 2,
        'no-undefined': 2,
        'new-cap': 2,
        'no-inline-comments': 2,
        'no-mixed-spaces-and-tabs': 2,
        'no-multiple-empty-lines': 2,
        'no-trailing-spaces': 2,
        'no-const-assign': 2,
        'no-var': 1,
        'no-param-reassign': ['error',
            {
                props: true,
                ignorePropertyModificationsFor: ['state']
            }
        ],
        'arrow-parens': ['error', 'as-needed'],
        'comma-dangle': ['error', {
            arrays: 'never'
        }]
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
};
