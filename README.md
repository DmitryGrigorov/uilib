# UI Lib

<!-- Add badges here: e.g., build status, npm version, license -->
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](https://example.com)
[![NPM Version](https://img.shields.io/npm/v/uilib.svg)](https://www.npmjs.com/package/uilib)
[![License](https://img.shields.io/npm/l/uilib.svg)](./LICENSE)

**UI Lib** is a comprehensive React component library for building production-ready applications. It provides a cohesive ecosystem that includes reusable UI components, a vast icon set, declarative animations, and a powerful custom table engine, all presented with a distinctive orange theme and a fully documented Storybook site.

---

## ✨ Features

| | |
|---|---|
| **Component Library** | **67+** reusable components, from `Button` and `Input` to `Table`, `Calendar`, and charts. |
| **Icon Set** | **1,200+** SVG icons, available as `.tsx` components generated via `@svgr/core`. |
| **Documentation** | **66+** Storybook stories with live examples, MDX guides, and accessibility checks. |
| **Custom Table Engine** | A powerful `Table` built from scratch, featuring nested rows, virtualization, and column menus. |
| **Theming** | A token-based `Palette` system with an orange brand theme, supporting light and dark modes. |
| **Animations** | Declarative enter/exit, layout, and micro-interaction animations powered by **Motion**. |
| **Testing** | **39+** test files using Jest and React Testing Library, focused on behavior over implementation. |
| **Automated Releases** | CI/CD pipeline with **semantic-release** for automatic versioning and changelog generation. |

---

## 🛠️ Tech Stack

- **React 19** + **TypeScript** with strongly typed public component APIs
- **styled-components 6** with a token-based `Pallette`, light/dark modes, and an orange brand palette
- **Motion** for declarative enter/exit, layout, and microinteraction animations
- **Storybook 10** for documentation, visual examples, and accessibility checks
- **Jest** + **React Testing Library** + **user-event** for unit and integration tests
- **MobX** for managing state in complex interactive demos
- **Monorepo** architecture for managing `components`, `icons`, and `dotfiles` packages

---

## 📐 Engineering Principles

The library is a coherent system rather than a collection of unrelated components:

> **1. Focused Public API**
> Every component exports a typed `Props` interface. Internal implementation details, such as DOM structure and private hooks, are not exposed.

> **2. Logic in Hooks, UI in Components**
> Business logic, state management, and side effects are encapsulated in `useSomething` hooks. This separation allows UI components to focus on rendering and enables independent testing of logic via `renderHook`.

> **3. Derived State over Effects**
> We prefer deriving state with `useMemo` from a single source of truth, avoiding complex and fragile `useEffect` chains for synchronization.

> **4. Accessibility by Design**
> Accessibility is a core part of the component contract. We implement correct ARIA roles, accessible names, and full keyboard navigation at the component level.

> **5. API Stability**
> We prioritize public API compatibility. Any breaking change to observable behavior is a deliberate, documented, and versioned decision.

---

## 📂 Repository Structure

```text
src/
  components/     # Public components (Button, Table, Calendar, etc.)
  icons/          # Source SVG files and generated TSX icon components
  table/          # Custom table engine implementation
  site/           # Storybook documentation source
packages/         # Supporting packages (e.g., dotfiles)
```

## Local development

```bash
npm install
npm run start        # Storybook at localhost:6006
npm test              # Jest unit and integration tests
npm run lint          # ESLint + Prettier + Stylelint
npm run tsc:check     # component type checking
```

Requirements: `node@18.16.0`, `npm@9.5.1`.

---

## Development and release process

The library uses **semantic-release** and Conventional Commits. The commit type (`fix`, `feat`, or `BREAKING CHANGE`) determines the next version and changelog entry automatically. Before release, a prerelease build of the package is tested in the primary consuming project. See [RELEASE.md](./RELEASE.md) for the complete workflow.

---
