---
description: |
---

# Git Push & Deploy

Automate the commit → changelog → push workflow for La Imaginaria frontend.

## Repository Configuration

| Remote | URL | Purpose |
|--------|-----|---------|
| `origin` | henryecamposs | Backup / personal |
| `marketplay` | ecosystem-laimaginaria | **Deployment** |

| Rama | Propósito |
|------|-----------|
| `main` | Desarrollo |
| `prod` | Producción — auto-deploy a Google Cloud Run |

## Workflow

### Step 1: Detect Changes and Auto-Tag

```powershell
git status
git diff --stat
```

Analyze changed files to determine commit type:

| Cambio detectado | Tag |
|------------------|-----|
| Nuevas funcionalidades, rutas, módulos | `feat` |
| Corrección de errores | `fix` |
| Refactorización sin cambio funcional | `refactor` |
| Documentación, MEMORY, CHANGELOG | `docs` |
| Dependencias, build, Docker | `chore` |
| Mejoras de rendimiento | `perf` |
| Estilos de código (lint, formato) | `style` |

Generate the commit message in Conventional Commits format:
```
<type>[optional scope]: <description>
```

See [conventional-commits.md](references/conventional-commits.md) for details.

### Step 2: Build and Verification (CRITICAL)

Before updating the changelog or committing, verify that the code builds correctly:

```powershell
npx tsc --noEmit
npm run build
```

1. **Fix TypeScript Errors**: If `tsc` returns errors, analyze and fix them immediately.
2. **Fix Build Errors**: If `npm run build` fails, resolve the issues.
3. **Re-verify**: Run the commands again until they succeed without errors.
4. **Check for Debuggers**: Ensure no `debugger` or `console.log` remains in sensitive or production code.

### Step 3: Update Changelog

Before committing, run the changelog-automation skill workflow:

1. Update `MEMORY.md` if there are structural changes.
2. Stage all changes:
```powershell
git add -A
```
3. Commit:
```powershell
git commit -m "<auto-detected-tag>: <description>"
```

### Step 3: Determine Push Mode

Ask the user if not specified:
- **"desarrollo"** / **"dev"** → Push to `main` on all remotes
- **"producción"** / **"prod"** → Push to `main` first, then merge `main` → `prod`

### Step 4A: Push to Development (main)

```powershell
git push origin main
git push marketplay main
```

Done. Notify the user.

### Step 4B: Push to Production (prod)

> ⚠️ **CRITICAL**: Pushing to `prod` on `marketplay` triggers auto-deploy.

**4B.1 — Request user authorization for deployment:**

> 🛑 **STOP**: Notify the user and ask for explicit authorization before proceeding with ANY production deployment steps.
> Message: "Los cambios en `main` están listos. ¿Autoriza preparar y desplegar los cambios a producción a través de la rama `prod`?"

**4B.2 — Only after user approval, Push main to all remotes first:**

```powershell
git push origin main
git push marketplay main
```

**4B.3 — Ensure `prod` branch exists and merge changes:**

```powershell
# Check if prod exists locally
git branch --list prod

# If it doesn't exist, create it from main
git checkout -b prod

# Merge main into prod (if it already existed, we just checkout and merge)
git checkout prod
git merge main
```

**4B.4 — Push prod branch to deploy:**

```powershell
git push origin prod
git push marketplay prod
git checkout main
```

**4B.5 — Confirm deployment:**

Notify the user that the push to `marketplay/prod` was completed and the auto-deploy should start.

## Important Rules

1. **Always update the changelog** before committing (use the `changelog-automation` skill).
2. **Never push to `prod`** without explicit user authorization.
3. **Always push `main` first** before merging to `prod`.
4. **marketplay** is the deployment remote.
5. **Return to `main`** after any `prod` operations.