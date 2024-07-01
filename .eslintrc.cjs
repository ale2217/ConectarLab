/* el codigo en cuestion es un archivo de configuracion de eslint en formato CommonJS (cjs) */
/* que exporta un objeto con diversas propiedades que definen la configuracion del linter para un proyecto en React */


module.exports = {
  root: true,
  /* root: define la raiz del proyecto para eslint */
  env: { browser: true, es2020: true },
  /* env: especifica los entornos en los que se ejecutara el codigo (browser y es2020 en este caso) */
  extends: [
    /* extends: extiende la configuracion base de eslint con reglas adicionales para react y react hooks */
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  /* ignorePatterns: define los patrones de archivos que se deben ignorar durante la verificacion */
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  /* parserOptions: configura las opciones del analizador para la versión de ecmascript y el tipo de fuente del codigo */
  settings: { react: { version: '18.2' } },
  /* settings: proporciona ajustes específicos, como la version de react */
  plugins: ['react-refresh'],
  /* plugins: lista los complementos adicionales que se utilizaran, como react-refresh */
  rules: {
    /* rules: define reglas personalizadas, como deshabilitar la apertura de enlaces en una nueva pestaña y permitir solo la exportacion de componentes constantes */
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
