# YesCoin App

> ## Разворачивание проекта
>
> ```
>   npm install - установка пакетов
> ```
>
> ```
>   npm run prepare - для включения прекомитера
> ```

> Чтобы апи заработало локально, необходимо в `.env` прописать переменную окружения со своим telegram_id
> ```
>   VITE_LOCAL_USER_ID={id}
> ```

> ## !!! ВАЖНО: Генерация API через Orval
>
> Так как `orval` на данном этапе не поддерживает `ES module`,
> перед каждой генерацией необходимо удалять из `package.json` строчку `"type": "module"`,
> а после генерации возвращать ее обратно.

## Стилизация

Все размеры задаются в rem, который задан для html.

Все вертикальные margin и padding задаются в vh которые вычисляется через функцию vertical-spacing.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
