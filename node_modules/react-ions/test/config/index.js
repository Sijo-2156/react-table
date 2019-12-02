
// TODO: reorganize test files so that we don't need multiple context entries here
const componentTestContext = require.context('../', false, /\.js/)
// NOTE: in the interest of speed, to test an individual component, use something like this:
// const componentTestContext = require.context('../', false, /\Input.js/);

const utilityTestContext = require.context('../utilities', false, /\.js/)

componentTestContext.keys().forEach(componentTestContext)
utilityTestContext.keys().forEach(utilityTestContext)

// require all source files for code coverage
// ^(?!__tests__).+\.js matches any .js files that are not in a __tests__ directory
// allows us to store our Jest tests in the same dircetory, 
// while also generating Karma test coverage.
const componentsContext = require.context('../../src/components/', true, /^((?!__tests__).)*\.js$/)
const utilitiesContext = require.context('../../src/utilities/', true, /^((?!__tests__).)*\.js$/)

utilitiesContext.keys().forEach(utilitiesContext)
componentsContext.keys().forEach(componentsContext)
