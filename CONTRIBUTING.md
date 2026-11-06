# Contributing

Thanks for helping with the StudentSuite website. This repository holds the site only. To change StudyMap or add a resource to one of the awesome lists, open the PR in [that project's repository](https://github.com/StudentSuite) instead; the docs pages here are built from those lists.

## Set up

Follow [Run it locally](README.md#run-it-locally) in the README.

## Before you open a pull request

Run the same checks CI runs:

```bash
npm run lint
npm test
npm run build
```

All three must pass. CI runs them on every pull request.

## What a good pull request looks like

- One change per pull request: a fix, a page, or a refactor, not all three.
- A description that says what changed and why, with a screenshot for anything visual (light and dark theme, and a phone-width view if layout changed).
- Accessible markup: real buttons and links, labelled controls, visible focus, and nothing that only works with a mouse.
- Plain, direct copy. No em dashes.
- Add an entry under `## [Unreleased]` in [CHANGELOG.md](CHANGELOG.md) for anything a visitor would notice.

## Reporting a problem

Open an issue with the page URL, what you expected, what happened, and your browser.
