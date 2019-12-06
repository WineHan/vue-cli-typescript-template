module.exports = (api, option) => {
  api.extendPackage({
    scripts: {
      serve: "vue-cli-service serve",
      build: "vue-cli-service build",
      lint: "vue-cli-service lint"
    },
    dependencies: {
      axios: "^0.19.0",
      "core-js": "^3.4.3",
      "vee-validate": "^3.1.3",
      vue: "^2.6.10",
      "vue-axios": "^2.1.5",
      "vue-class-component": "^7.0.2",
      "vue-i18n": "^8.15.1",
      "vue-property-decorator": "^8.3.0",
      "vue-router": "^3.1.3",
      vuex: "^3.1.2",
      "vuex-class": "^0.3.2"
    },
    devDependencies: {
      "@typescript-eslint/eslint-plugin": "^2.10.0",
      "@vue/cli-plugin-babel": "^4.1.0",
      "@vue/cli-plugin-eslint": "^4.1.0",
      "@vue/cli-plugin-router": "^4.1.0",
      "@vue/cli-plugin-typescript": "^4.1.0",
      "@vue/cli-plugin-vuex": "^4.1.0",
      "@vue/cli-service": "^4.1.0",
      "@vue/eslint-config-standard": "^4.0.0",
      "@vue/eslint-config-typescript": "^4.0.0",
      eslint: "^5.16.0",
      "eslint-plugin-typescript": "^0.14.0",
      "eslint-plugin-vue": "^5.0.0",
      "lint-staged": "^9.4.3",
      "node-sass": "^4.12.0",
      "sass-loader": "^8.0.0",
      typescript: "~3.5.3",
      "vue-template-compiler": "^2.6.10"
    },
    gitHooks: {
      "pre-commit": "lint-staged"
    },
    "lint-staged": {
      "*.{js,vue,ts}": ["vue-cli-service lint", "git add"]
    }
  });
  api.render("./template");
};
