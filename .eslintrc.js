module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    extends: [
        'plugin:vue/essential',
        'plugin:prettier/recommended', // we added this line
        '@vue/prettier'
    ],
    plugins: ['vue', 'html'],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'max-len': [1, { code: 100 }],
        'no-unused-vars': 'off'
    },
    parserOptions: {
        parser: 'babel-eslint'
    },
    globals: {
        _: true,
        BMap: true,
        BMapLib:true
    }
}
