# Conventional Commits — Referencia Rápida

Formato: `<type>[optional scope]: <description>`

## Tipos (usados por generate-changelog.ps1)

| Type | Descripción | Changelog Section |
|------|-------------|-------------------|
| `feat` | Nueva funcionalidad | **Added** |
| `fix` | Corrección de errores | **Fixed** |
| `refactor` | Refactorización | **Changed** |
| `perf` | Mejora de rendimiento | **Changed** |
| `style` | Estilos de código | **Changed** |
| `chore` | Mantenimiento, build | (no aparece en changelog) |
| `docs` | Documentación | (no aparece en changelog) |
| `test` | Tests | (no aparece en changelog) |
| `ci` | CI/CD | (no aparece en changelog) |

## Breaking Changes

Agregar `!` después del type:
```
feat!: remove deprecated API endpoint
```

## Ejemplos

```
feat(sales): add ticket cancellation endpoint
fix(auth): correct JWT token expiration
chore: update dependencies
docs: update MEMORY.md with sales module
refactor(finance): extract wallet service
```
