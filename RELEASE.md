# Development and release guidelines

## Development workflow

1. Before changing UI Lib, create a branch from `dev` using one of these formats:
   - `feature/issue-number-short-description` for new functionality;
   - `bugfix/issue-number-short-description` for bug fixes.
2. Make changes on your branch and commit frequently whenever a meaningful, complete unit of work is ready.

   **Example:** if one component depends on another component whose colors must be corrected first, update those colors and commit that self-contained change before modifying the dependent component.
3. Push your work at the end of each day, even when the task is not complete.
4. Open a merge request after implementing the intended changes.
5. To test a package, manually run the `prerelease` GitLab job. Semantic Release will publish a prerelease version of the changed package whose prerelease identifier is derived from the branch name.
6. Test that version in the primary Aurora project and confirm that it does not introduce regressions.
7. Notify the team that the merge request is ready for review. This step should eventually be automated.
8. Address review feedback and return to step 5 when another prerelease test is needed.
9. After receiving two approvals and resolving every comment, update your branch from `dev`, merge it, and accept the merge request.
10. After the merge request and required pipelines complete, run the `release` GitLab job when a release is required. Semantic Release selects the version from the commit history and generates the changelog, so keep commit messages clear and precise.

## Commit message rules

Semantic Release uses commit messages to determine how code changes affect users, select the next version, and generate the changelog. We follow the [Angular Commit Message Conventions](https://github.com/angular/angular/blob/main/CONTRIBUTING.md#-commit-message-format).

A commit message must contain a type and description and may include an optional scope:

**`type(optional-scope): description`**

Supported types:

- `feat` — new functionality
- `fix` — bug fix
- `build` — build-system or external dependency changes
- `ci` — CI configuration and script changes, such as `.gitlab-ci.yml`
- `docs` — documentation changes
- `perf` — performance improvements
- `refactor` — code changes that neither fix a bug nor add functionality
- `test` — adding or changing tests
- `BREAKING CHANGE` — a backward-incompatible change. Add it after the main commit type, for example:

```text
fix: Deleted component
BREAKING CHANGE: deleted component
```

Scopes are currently not used. The following scopes are recognized if that policy changes:

- animations
- bazel
- benchpress
- common
- compiler
- compiler-cli
- core
- elements
- forms
- http
- language-service
- localize
- platform-browser
- platform-browser-dynamic
- platform-server
- router
- service-worker
- upgrade
- zone.js

Every conforming commit is included in release analysis. Add `[skip-ci]` to a commit message to omit that commit from release analysis.

The tables below show how commit types affect versions while the package is in active `0.x` development and after a stable major release. This library currently uses the first model because it is still evolving toward production readiness.

### Version `0.minor.patch`

| Commit message | Release type |
| --- | --- |
| `fix: Fixed bug`<br />`feat: Added new feature` | Patch |
| `feat: Deleted component`<br />`BREAKING CHANGE: Deleted component` | Minor |
| | |

### Version `major.minor.patch`

| Commit message | Release type |
| --- | --- |
| `fix: Fixed bug` | Patch |
| `feat: Added new feature` | Minor |
| `feat: Deleted component`<br />`BREAKING CHANGE: Deleted component` | Major |
