# Contribution Guidelines

When contributing to `PujoAtlasKol-Web`, whether on GitHub or in other community spaces:

- Be respectful, civil, and open-minded.
- Before opening a new pull request, try searching through the [issue tracker](https://github.com/Pujo-Atlas-Kolkata/PujoAtlasKol-Web/issues) for known issues or fixes.
- If you want to make code changes based on your personal opinion(s), make sure you open an issue first describing the changes you want to make, and open a pull request only when your suggestions get approved by maintainers.

## How to Contribute

### Prerequisites

In order to not waste your time implementing a change that has already been declined, or is generally not needed, start by [opening an issue](https://github.com/Pujo-Atlas-Kolkata/PujoAtlasKol-Web/issues) describing the problem you would like to solve.

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

| Command                | Description                                             |
| -----------------------| ------------------------------------------------------- |
| `npm run dev`          | Starts the development server for the site              |   
| `npm run build`        | Builds the Astro project                                |
| `npm run format`       | Formats the code                                        |
| `npm run format:check` | Checks formatting of the code                           |
| `npm run lint`         | Checks Lint issues                                      |
| `npm run lint:fix`     | Lints the code and fixes any errors                     |
| `npm run prepare`      | Setup the Husky environment for pre-commit hooks        |

When making commits, make sure to follow the [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/) guidelines, i.e. prepending the message with `feat:`, `fix:`, `chore:`, `docs:`. You can use `git status` to double check which files have not yet been staged for commit:

```bash
git add <file> && git commit -m "feat/fix/chore/docs: commit message"
```

Please keep in mind that you will not be able to push commits if you're not following the [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/) guidelines or Lint check is failing.

### When you're done

When you're done implementing your changes, please also make a manual, functional test of your changes. When all that's done, it's time to file a pull request to upstream, and fill out the title and body appropriately. Again, make sure to follow the [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/) guidelines for your title.
