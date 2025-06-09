# Contribution Guidelines

When contributing to `PujoAtlasKol-Web`, whether on GitHub or in other community spaces:

- Be respectful, civil, and open-minded.
- Before opening a new pull request, try searching through the [issue tracker](https://github.com/Pujo-Atlas-Kolkata/PujoAtlasKol-Web/issues) for known issues or fixes.
- If you want to make code changes based on your personal opinion(s), make sure you open an issue first describing the changes you want to make, and open a pull request only when your suggestions get approved by maintainers.

---

## Project Structure & Stack

- **Framework:** Next.js (App Router, TypeScript)
- **Styling:** Tailwind CSS, Shadcn UI
- **Analytics:** PostHog
- **Error Tracking:** Sentry
- **CI/CD:** GitHub Actions (see `.github/workflows/ci.yml`)
- **Package Manager:** pnpm (use `pnpm install`, not npm/yarn)

---

## How to Contribute

### Prerequisites

To avoid spending time on changes that may not be needed, [open an issue](https://github.com/Pujo-Atlas-Kolkata/PujoAtlasKol-Web/issues/new) describing the problem you would like to solve before starting work.

### Recommended VSCode Extensions

To ensure a consistent development environment and code quality, please install the following VSCode extensions before contributing:

1. **[Prettier - Code Formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)**
2. **[ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)**
3. **[Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)**
4. **[GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)**
5. **[TypeScript Next](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-next)**
6. **[PostCSS Language Support](https://marketplace.visualstudio.com/items?itemName=csstools.postcss)**

---

## Development Workflow

1. **Install dependencies:**

   ```bash
   pnpm install
   ```

2. **Start development server:**

   ```bash
   pnpm dev
   ```

3. **Run checks before pushing:**
   ```bash
   pnpm lint
   pnpm format:check
   pnpm typecheck
   pnpm build
   ```

---

## Code Quality & Commits

- **Linting:** ESLint is enforced in CI.
- **Formatting:** Prettier is enforced in CI.
- **Type Safety:** TypeScript errors will block PRs.
- **UI/UX:** Every component mush be mobile responsive unless stated otherwise.
- **Commit Messages:** Use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).

---

## Feature Flags & Custom Properties

- Store all feature flag and custom property names in a single enum (TypeScript) or const object (JavaScript).
- Never hardcode API keys or sensitive values—use environment variables (see `.env.example`).
- If a feature flag or custom property is referenced in multiple places, use a shared enum/const object to avoid duplication and ensure consistency.

---

## Component & File Organization

- Place reusable UI in `src/components/ui/`.
- Use `src/constants/` for enums, config, and shared values.
- Utilities go in `src/lib/`.
- Static assets in `public/`.

---

## Testing & Manual QA

- Manual functional testing is required before submitting a PR.
- Automated tests are not present, but CI will enforce build, lint, and typecheck.

---

## Pull Requests

- PR must be created from `dev` branch and PR should be raised against the `dev` branch unless stated otherwise
- Use the provided PR template.
- Fill out all sections, including testing steps and screenshots if UI is affected.
- All PRs must pass CI (lint, format, typecheck, build) before merge.
- Manual testing is required before submitting.

---

## Community

For help, discussion about best practices, or any other conversation that would benefit this project: [Join the Pujo Atlas Discord Server.](https://discord.com/invite/xxSXWYf6d4)

---

## Etiquette

- Be respectful, civil, and open-minded.
- Follow the [Code of Conduct](CODE_OF_CONDUCT.md).
