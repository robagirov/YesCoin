const eslintCommand = (filenames) => `eslint --debug ${filenames.join(' ')} --fix`
const formatCommand = (filenames) => `prettier --write ${filenames.join(' ')}`
const gitCommand = (filenames) => `git add ${filenames.join(' ')}`
// const stylelintCommand = 'stylelint --allow-empty-input "**/*.{css,scss}"';

module.exports = {
  '*.{cjs,js,jsx,ts,tsx}': [formatCommand, eslintCommand, gitCommand],
  '*.{css,scss}': [formatCommand, gitCommand],
  '!*.{cjs,js,jsx,ts,tsx,css,scss}': [formatCommand, gitCommand],
}
