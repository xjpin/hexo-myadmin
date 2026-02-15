const pluginVue = require("eslint-plugin-vue");


module.exports = [
    {
        "ignores": ["node_modules/", "dist/", "public/"],
    },
    ...pluginVue.configs["flat/recommended"],
    {
        "rules":{
            "vue/require-default-prop": "off",
            "vue/require-prop-types": "off",
            "vue/no-side-effects-in-computed-properties": "off",
            "vue/no-v-html": "off",
            "vue/valid-v-for": "off",
            "vue/require-v-for-key": "off",
            "vue/max-attributes-per-line": ["error", {"singleline": 3}],
            "vue/html-indent": ["error", 2],
            "quotes": ["error", "double", {"avoidEscape": true}],
            "indent": ["error", 4, {"SwitchCase": 1, "VariableDeclarator": 1}],
            "semi": ["error", "always"],
            "object-shorthand": ["error", "always"],
            "quote-props": ["error", "always"],
            "space-before-function-paren": ["error", {"anonymous": "always", "named": "never", "asyncArrow": "always"}],
            "comma-dangle": ["error", "always-multiline"],
            "object-curly-spacing": ["error", "never"],
            "no-var": "error",
            "prefer-const": "error",
            "array-bracket-spacing": ["error", "never"],
            "no-trailing-spaces": "error",
        },
    },
];
