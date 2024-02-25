// const path = require('path');

// const eslintCommand = (filenames) =>
//   `next lint --file ${filenames
//     .map((f) => path.relative(process.cwd(), f))
//     .join(' --file ')}`;

const eslintCommand = (filenames) => `eslint --debug ${filenames.join(' ')} --fix`
// const formatCommand = 'npm run format'
const formatCommand = (filenames) => `prettier --write ${filenames.join(' ')}`
const gitCommand = (filenames) => `git add ${filenames.join(' ')}`
// const stylelintCommand = 'stylelint --allow-empty-input "**/*.{css,scss}"';

module.exports = {
  '*.{js,jsx,ts,tsx}': [formatCommand, eslintCommand, gitCommand],
  '*.{css,scss}': [formatCommand, gitCommand],
  '!*.{js,jsx,ts,tsx,css,scss}': [formatCommand, gitCommand],
}
