const eslintCommand = (filenames) => `eslint --debug ${filenames.join(' ')} --fix`
const formatCommand = (filenames) => `prettier --write ${filenames.join(' ')}`
const gitCommand = (filenames) => `git add ${filenames.join(' ')}`
const stylelintCommand = (filenames) => `stylelint  --fix  ${filenames.join(' ')}`

module.exports = {
  '*.{cjs,js,jsx,ts,tsx}': [formatCommand, eslintCommand, gitCommand],
  '*.{css,scss}': [formatCommand, stylelintCommand, gitCommand],
  // '!*.{cjs,js,jsx,ts,tsx,css,scss}': [formatCommand, gitCommand],
}
