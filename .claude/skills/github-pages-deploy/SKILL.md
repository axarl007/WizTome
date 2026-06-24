---
name: github-pages-deploy
description: Deploying or debugging the WizTome static site (Vite + React) to GitHub Pages via GitHub Actions. Use when setting up Pages deployment, or when a deploy workflow run fails and you need to diagnose why.
---

# GitHub Pages Deploy (Actions-based)

This repo deploys via `actions/deploy-pages`, not the legacy `gh-pages` branch
approach. The workflow lives at `.github/workflows/deploy.yml`.

## Architecture

- `vite.config.ts` sets `base: "/WizTome/"` to match the Pages subpath
  (`https://axarl007.github.io/WizTome/`). If the repo is ever renamed, this
  must change too.
- `deploy.yml` triggers on `push` to `main` + `workflow_dispatch`, with two jobs:
  - `build`: checkout → `actions/setup-node@v4` (node 22, npm cache) →
    `npm ci` → `npm run build` → `actions/configure-pages@v5` →
    `actions/upload-pages-artifact@v3` (path `./dist`).
  - `deploy`: `needs: build`, runs in the `github-pages` environment, calls
    `actions/deploy-pages@v4`.

## Three gotchas, in the order they tend to bite

### 1. Workflow only fires from the default branch

`workflow_dispatch` and push-triggered workflows are only "live" once the
workflow file exists on the repo's **default branch** (`main`). A workflow
that only exists on a feature branch can't be manually triggered or
auto-fire on push — GitHub won't even show it in the Actions UI as runnable.
Fix: merge/push the workflow file to `main` first.

### 2. Pages source not set to "GitHub Actions"

Settings → Pages → Build and deployment → Source must be **GitHub Actions**
(not "Deploy from a branch"). This is a manual, UI-only setting — no API/MCP
tool here can flip it.

**Signature**: the `build` job itself fails at the `configure-pages` step,
with real, visible log output saying Pages isn't configured for Actions.

### 3. Environment branch protection (the sneaky one)

Settings → Environments → `github-pages` → "Deployment branches and tags"
can restrict which branches/tags are allowed to deploy to that environment.
If the deploying branch isn't on the allowlist, the `deploy` job is rejected
— but the failure looks deceptively like gotcha #2 at a glance (both just
show "workflow run failed").

**Signature**: `build` job fully succeeds. `deploy` job fails almost
instantly (~1-2s), shows **zero steps**, and fetching its job logs returns a
404. That combination (good build + empty/404 deploy) is the tell — it
means GitHub rejected the deployment before running any step, which only
happens for an environment policy block.

**Fix**: Settings → Environments → `github-pages` → Deployment branches and
tags → add the deploying branch (or relax the policy to "No restriction").

## Diagnostic checklist

| Symptom | Cause | Fix |
|---|---|---|
| Workflow doesn't appear / can't be dispatched | Workflow file not on default branch | Push/merge `deploy.yml` to `main` |
| `build` job fails at `configure-pages`, real error in logs | Pages source != GitHub Actions | Settings → Pages → Source → GitHub Actions |
| `build` succeeds, `deploy` fails in ~1-2s, 0 steps, logs 404 | Environment branch policy blocking | Settings → Environments → github-pages → allow the branch |
| `build` succeeds, `deploy` succeeds, site 404s | Wrong `base` in `vite.config.ts` | Match `base` to `/<repo-name>/` |

## Retrying after a fix

No need to push an empty commit — re-run just the failed jobs from the
existing workflow run (GitHub UI: "Re-run failed jobs", or via the GitHub
MCP tools' workflow-run rerun action). This re-triggers `deploy` without
rebuilding from scratch once the actual blocker (Pages source or
environment policy) is fixed.
