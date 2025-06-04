import js from '@eslint/js';
import globals from 'globals';

export default [
    {
        files: ['**/*.js'],
        languageOptions: {
            exmaVersion: 2022,
            globals: {
                ...globals.browser,
                ...globals.builtin,
                ...globals.node,
            },
        },
        rules: {
            ...js.configs.recommended.rules,
            'no-unused-vars': 'warn',
        },
    },
];