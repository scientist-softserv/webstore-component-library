# WebStore Component Library
A React component library intended for use with WebStore applications.

## Table of Contents

- [Contributing](#contributing)
	- [NPM version](#npm-version)
	- [Running tests](#running-tests)
	- [Linting](#linting)

---

## Test and Deploy

Use the built-in continuous integration in GitLab.

- [ ] [Get started with GitLab CI/CD](https://docs.gitlab.com/ee/ci/quick_start/index.html)
- [ ] [Analyze your code for known vulnerabilities with Static Application Security Testing(SAST)](https://docs.gitlab.com/ee/user/application_security/sast/)
- [ ] [Deploy to Kubernetes, Amazon EC2, or Amazon ECS using Auto Deploy](https://docs.gitlab.com/ee/topics/autodevops/requirements.html)
- [ ] [Use pull-based deployments for improved Kubernetes management](https://docs.gitlab.com/ee/user/clusters/agent/)
- [ ] [Set up protected environments](https://docs.gitlab.com/ee/ci/environments/protected_environments.html)

***

# Editing this README

When you're ready to make this README your own, just edit this file and use the handy template below (or feel free to structure it however you want - this is just a starting point!). Thank you to [makeareadme.com](https://www.makeareadme.com/) for this template.

## Suggestions for a good README

## Badges
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
If you have ideas for releases in the future, it is a good idea to list them in the README.

## Contributing
### File Structure
- A component that uses HTML elements, but not other named components, belongs in "src/components"
- A component that uses one or more other named components belongs in "src/compounds"
- If a compound component needs to import another compound component, use the direct import
  - e.g. "import Component from '../Component/Component'" and NOT "import { Component } from '..'"

### NPM version
NPM version `v8.19.2` is the version we're using in implementing this package. Please do not mix it with Yarn.

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

State if you are open to contributions and what your requirements are for accepting them.

For people who want to make changes to your project, it's helpful to have some documentation on how to get started. Perhaps there is a script that they should run or some environment variables that they need to set. Make these steps explicit. These instructions could also be useful to your future self.

You can also document commands to lint the code or run tests. These steps help to ensure high code quality and reduce the likelihood that the changes inadvertently break something. Having instructions for running tests is especially helpful if it requires external setup, such as starting a Selenium server for testing in a browser.

## Authors and acknowledgment
Alisha Evans

## License
MIT

## Project status
WIP
