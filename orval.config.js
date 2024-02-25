module.exports = {
  yesCoin: {
    output: {
      mode: 'split',
      baseUrl: 'http://yestoken.space',
      workspace: './src/shared/openApi/',
      target: 'index.ts',
      schemas: 'model',
      client: 'react-query',
      tsconfig: true,
      prettier: true,
    },
    input: {
      target: 'http://yestoken.space/openapi.json',
    },
  },
}
