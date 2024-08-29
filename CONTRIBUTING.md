# Contribution Guidelines

When contributing to `PujoAtlasKol-Web`, whether on GitHub or in other community spaces:

- Be respectful, civil, and open-minded.
- Before opening a new pull request, try searching through the [issue tracker](https://github.com/Pujo-Atlas-Kolkata/PujoAtlasKol-Web/issues) for known issues or fixes.
- If you want to make code changes based on your personal opinion(s), make sure you open an issue first describing the changes you want to make, and open a pull request only when your suggestions get approved by maintainers.

## How to Contribute

### Prerequisites

In order to not waste your time implementing a change that has already been declined, or is generally not needed, start by [opening an issue](https://github.com/Pujo-Atlas-Kolkata/PujoAtlasKol-Web/issues/new) describing the problem you would like to solve.

### ⭐ Recommended VSCode Extensions

> To ensure a consistent development environment and code quality, please install the following VSCode extensions before contributing:

1. **[Astro VSCode Extension](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode)**: Provides support for Astro framework with syntax highlighting, snippets, and more.
2. **[Prettier - Code Formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)**: Automatically formats your code according to our project's style guide.
3. **[ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)**: Lints JavaScript/TypeScript code to catch common errors and enforce coding standards.
4. **[Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)**: Offers utilities for working with Tailwind CSS, including autocompletion and linting.
5. **[GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)**: Enhances Git capabilities within VSCode with advanced visualization tools and features.
6. **[TypeScript Next](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-next)**: Provides access to the latest TypeScript features and updates.
7. **[PostCSS Language Support](https://marketplace.visualstudio.com/items?itemName=csstools.postcss)**: Adds syntax highlighting and linting for PostCSS files.
8. **[ES7+ React/Redux/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)**: A collection of useful snippets for React and Redux development.

### Setup your environment locally

_Some commands will assume you have the Github CLI installed, if you haven't, consider [installing it](https://github.com/cli/cli#installation), but you can always use the Web UI if you prefer that instead._

In order to contribute to this project, you will need to fork the repository:

```bash
gh repo fork Pujo-Atlas-Kolkata/PujoAtlasKol-Web
```

then, clone it to your local machine:

```bash
gh repo clone <your-github-name>/PujoAtlasKol-Web
```

This project uses [npm](https://www.npmjs.com/) as its package manager. Install it if you haven't already.

Then, install the Project's Dependencies:

```bash
npm install
```

Setup your Husky Environment:

```bash
npm run prepare
```

Start the Local Developement Server:

```bash
npm run dev
```

### Implement your changes

Now you're all setup and can start implementing your changes. Here are some useful scripts for when you are developing:

| Command                | Description                                      |
| ---------------------- | ------------------------------------------------ |
| `npm run dev`          | Starts the development server for the site       |
| `npm run build`        | Builds the Astro project                         |
| `npm run format`       | Formats the code                                 |
| `npm run format:check` | Checks formatting of the code                    |
| `npm run lint`         | Checks Lint issues                               |
| `npm run lint:fix`     | Lints the code and fixes any errors              |
| `npm run prepare`      | Setup the Husky environment for pre-commit hooks |

When making commits, make sure to follow the [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/) guidelines, i.e. prepending the message with `feat:`, `fix:`, `chore:`, `docs:`. You can use `git status` to double check which files have not yet been staged for commit:

```bash
git add <file> && git commit -m "feat/fix/chore/docs: commit message"
```

Please keep in mind that you will not be able to push commits if you're not following the [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/) guidelines or Lint check is failing.

### When you're done

When you're done implementing your changes, please also make a manual, functional test of your changes. When all that's done, it's time to file a pull request to upstream, and fill out the title and body appropriately. Again, make sure to follow the [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/) guidelines for your title.

### Community

For help, discussion about best practices, or any other conversation that would benefit this project: [Join the Pujo Atlas Discord Server.](https://discord.com/invite/xxSXWYf6d4)
