module.exports = {
  yesCoin: {
    output: {
      mode: 'split',
      baseUrl: 'https://yestoken.space',
      workspace: './src/shared/openApi/',
      target: 'index.ts',
      schemas: 'model',
      client: 'react-query',
      override: {
        query: {
          useQuery: true,
          useSuspenseQuery: true,
        },
        mutator: {
          path: '../api/axiosInstance.ts',
          name: 'axiosInstance',
        },
      },
      tsconfig: true,
      prettier: true,
    },
    input: {
      target: 'https://yestoken.space/openapi.json',
    },
  },
}
