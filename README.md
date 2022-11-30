# WebStore Component Library
A React component library intended for use with WebStore applications.

## Table of Contents

- [Getting started](#getting-started)
	- [NPM version](#npm-version)
	- [Running the app](#running-the-app)
- [Contributing](#contributing)
	- [Running tests](#running-tests)
	- [Linting](#linting)
- [Building the library](#building-the-library)

---
## Getting started
### NPM version
Use NPM version `v8.19.2` and please do not mix it with Yarn.

### Running the app
- Start the app using:
	``` bash
	npm i # installs any new packages
	npm run storybook # starts the storybook app so that we can view/test the components in a UI
	```
- A new browser tab will automatically open to "http://localhost:6006/"
## Contributing
<!-- State if you are open to contributions and what your requirements are for accepting them.
 -->
### File Structure
- Components (including those in the "compounds" folder) and stories should be PascalCase
- CSS files should be kebab-case
- A component that uses HTML elements, but not other named components, belongs in "src/components"
- A component that uses one or more other named components belongs in "src/compounds"
- Use the default imports when importing components into one another
  - e.g. "import Component from '../Component/Component'" and NOT "import { Component } from '..'"
- All components are named .jsx files that live within a folder of the same name. The corresponding css file and story/stories should also be in this folder
  - e.g.
	  - ComponentA
			- component-a.css
		  - ComponentA.jsx
			- ComponentA.stories.jsx

### Running tests
This code implements the [StoryBook test runners](https://storybook.js.org/docs/react/writing-tests/test-runner). Use the appropriate command below to run tests.
``` bash
# run tests locally
npm run test-storybook

# run tests against the deployed storybook
#TODO
```

### Linting
This code is using [ESLint](https://eslint.org/docs/latest/rules/) to handle formatting. Use the appropriate command below to check formatting.

```bash
# run the entire application
npx eslint "./**"

# run a single file
npx eslint <path-to-file>
e.g.: npx eslint src/components/Button/index.jsx

# run a single folder
npx eslint "<path-to-folder>/**"
e.g.: npx eslint "src/components/**"

# run and fix errors
append `--fix` to any of the commands above
e.g.: npx eslint src/components/Button/index.jsx --fix
```

### Using Icons
This project uses [fontawesome's free solid icons](https://fontawesome.com/search?o=r&m=free). An icon library that explicitly states the react imports for all icons in use is defined at `src/assets/fontawesome.js`. If you need to add additional icons for use in a component or compound, you must import/export them in this library file. 

## Building the library
We are using Rollup JS to build and publish the library. The scripts will build based on the contents of "src/index.js" so make sure that any newly created components are referenced in the appropriate "components/index" or "compounds/index" files.
``` bash
npm run build-lib # use when you want to build the library for publishing
npm run watch-lib # use when you want to build the library for local use; it will watch for changes. it may take up to 30 seconds to reflect a change though
```

## Authors and acknowledgment
Alisha Evans

## License
MIT

## Project status
WIP

<!-- ## Badges
On some READMEs, you may see small images that convey metadata, such as whether or not all the tests are passing for the project. You can use Shields to add some to your README. Many services also have instructions for adding a badge.

## Visuals
Depending on what you are making, it can be a good idea to include screenshots or even a video (you'll frequently see GIFs rather than actual videos). Tools like ttygif can help, but check out Asciinema for a more sophisticated method.

## Installation
Within a particular ecosystem, there may be a common way of installing things, such as using Yarn, NuGet, or Homebrew. However, consider the possibility that whoever is reading your README is a novice and would like more guidance. Listing specific steps helps remove ambiguity and gets people to using your project as quickly as possible. If it only runs in a specific context like a particular programming language version or operating system or has dependencies that have to be installed manually, also add a Requirements subsection.

## Usage
Use examples liberally, and show the expected output if you can. It's helpful to have inline the smallest example of usage that you can demonstrate, while providing links to more sophisticated examples if they are too long to reasonably include in the README.

## Support
Tell people where they can go to for help. It can be any combination of an issue tracker, a chat room, an email address, etc.

## Roadmap
If you have ideas for releases in the future, it is a good idea to list them in the README. -->
